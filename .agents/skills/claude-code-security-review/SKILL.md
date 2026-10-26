---
name: claude-code-security-review
description: Comprehensive security analysis, vulnerability detection, and OWASP review guidelines for Next.js, Supabase, and multi-tenant architectures based on anthropics/claude-code-security-review.
---

# Claude Code Security Review Skill

This skill provides semantic security analysis guidelines, vulnerability detection rules, and automated audit checklists for full-stack Next.js and Supabase applications, based on **anthropics/claude-code-security-review**.

---

## 1. Core Threat Modeling & Vulnerability Vectors

### A. Multi-Tenant Isolation & Cross-Tenant Data Leaks
- **Tenant ID Validation**: Every database operation, query, and API call must validate that `company_id` or `subdomain` matches the authenticated session.
- **Row Level Security (RLS)**:
  - Tables containing employee data, payroll, salaries, and company records must have RLS enabled: `ALTER TABLE [table] ENABLE ROW LEVEL SECURITY;`.
  - Policies must evaluate against `auth.uid()` and verified company tenant mappings, never relying purely on client-supplied parameters.
- **Subdomain Spoofing**: Ensure cookies or headers cannot be manipulated by untrusted clients to impersonate another tenant's workspace.

### B. Authentication, Sessions & SSR Security
- **Cookie Security**:
  - Auth tokens and session cookies must specify `SameSite=Lax` or `Strict`, `HttpOnly` (where accessed purely by server), and `Secure` in production.
- **SSR Client Token Leakage**:
  - Ensure `process.env.SUPABASE_SERVICE_ROLE_KEY` is NEVER imported or referenced in client components (`'use client'`).
  - Use `createClient` from `@/lib/supabase/client` on the browser, and server client with cookie storage in SSR / server actions.
- **Email Verification Bypass**:
  - Enforce email confirmation checks before granting dashboard or administrative access.

### C. Injection & Data Integrity
- **SQL Injection**:
  - Always use parameterized queries or Supabase PostgREST query builders (`.eq()`, `.select()`, `.insert()`).
  - Never concatenate raw user input into `rpc` calls or raw SQL statements.
- **Cross-Site Scripting (XSS)**:
  - Sanitize any user-controlled input rendered into HTML or SVG filters.
  - Avoid `dangerouslySetInnerHTML` unless input is processed with an approved sanitizer (e.g., DOMPurify).

### D. Sensitive Data & Statutory Privacy (NDPA 2023)
- **PII & Salary Masking**:
  - Nigerian statutory identifiers (BVN, NIN, RSA PIN) and gross salaries must not be exposed in public endpoints or unauthenticated client responses.
  - Audit logs must strip credentials and auth tokens.

---

## 2. Review Checklist

When executing a security review on a component or pull request:
1. **Check Inputs & Validation**: Are all form fields sanitized and validated on the server boundary?
2. **Check Access Control**: Does the endpoint enforce tenant isolation and role permissions (`admin` vs `staff`)?
3. **Check Secrets**: Are any API keys or tokens committed to git or exposed in client bundles?
4. **Check Dependencies**: Verify `package.json` for known vulnerabilities or unpinned critical dependencies.
5. **Check Error Disclosures**: Ensure stack traces and internal database schemas are not leaked in error responses.
