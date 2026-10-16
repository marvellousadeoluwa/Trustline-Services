---
name: nigeria-legal-compliance
description: Authoritative guide and checklist for Nigerian legal, privacy, and regulatory compliance (NDPR, NDPC/NDPA 2023, statutory deductions, and HR data handling).
---

# Nigerian Legal & Data Privacy Compliance (NDPR & NDPC)

This skill provides comprehensive instructions, required clauses, and regulatory checklists for drafting legal pages, privacy policies, terms of service, and HR data architecture for organizations operating in Nigeria under the oversight of the **Nigeria Data Protection Commission (NDPC)** and the **Nigeria Data Protection Act (NDPA) 2023**, along with the **Nigeria Data Protection Regulation (NDPR) 2019**.

---

## 1. Regulatory Authorities & Statutory Framework

### A. Nigeria Data Protection Commission (NDPC)
- Established under the **Nigeria Data Protection Act (NDPA) 2023**.
- Succeeded the interim NITDA regulatory framework as the primary regulatory and enforcement body for data privacy in Nigeria.
- Enforces lawful data collection, mandatory Data Protection Audits, registration of Data Controllers and Processors of Major Importance (DCMI/DPMI), and sanctions for data breaches.

### B. Nigeria Data Protection Regulation (NDPR) 2019
- Continues to apply subsidiary rules not inconsistent with the NDPA 2023.
- Key principles: Lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity, and confidentiality.

### C. Statutory Labor, Payroll & Tax Laws
- **Personal Income Tax Act (PITA)** (as amended): PAYE computation, employee income declaration, annual Form H1/Form A filings with State Internal Revenue Services (e.g., LIRS, OGIRS).
- **Companies Income Tax Act (CITA)**: Corporate tax filing with Federal Inland Revenue Service (FIRS).
- **Pension Reform Act 2014**: Mandatory 10% employer / 8% employee pension contributions to licensed Pension Fund Custodians (PFCs/PFAs).
- **National Housing Fund (NHF) Act**: 2.5% monthly basic salary deduction remitted to Federal Mortgage Bank of Nigeria (FMBN).
- **Employees' Compensation Act (ECA) 2010**: 1% payroll levy to Nigeria Social Insurance Trust Fund (NSITF).
- **Industrial Training Fund (ITF) Act**: 1% of annual payroll for employers with 5+ staff or ₦50M+ turnover.

---

## 2. Mandatory Privacy Policy Clauses for NDPC & NDPR Compliance

Whenever generating or updating a Privacy Policy for Trustline or client HR Centers in Nigeria, you MUST include:

### 1. Identity & Contact Details of the Data Controller
- Full corporate entity name (e.g., *Trustline Professional Services Ltd*, RC 9398960).
- Registered office address in Nigeria.
- Contact email for data protection inquiries (`dpo@trustlineprofessional.com` or `info@trustlineprofessional.com`).
- Data Protection Officer (DPO) designation.

### 2. Lawful Bases for Processing (Section 25 NDPA 2023)
- **Consent**: Freely given, specific, informed, and unambiguous.
- **Contractual Necessity**: Performance of HR services, employment contracts, payroll processing, and benefits administration.
- **Legal Obligation**: Compliance with Nigerian tax and statutory laws (PITA, Pension Reform Act, NHF, NSITF, ITF).
- **Legitimate Interest**: Fraud prevention, system security, multi-tenant workspace isolation.

### 3. Categories of Data Collected
- **Identity & Contact**: Full name, work email, phone number, address, date of birth, emergency contacts.
- **Payroll & Financial**: Bank Account Number, Bank Verification Number (BVN) / National Identification Number (NIN) where required by regulatory reporting, Tax Identification Number (TIN), Gross Salary, Allowances.
- **Statutory Identifiers**: RSA PIN (Pension), NHF Number, State of Origin/LIRS Tax ID.

### 4. Data Subject Rights under NDPA & NDPR
The policy MUST expressly state the rights of Nigerian data subjects:
- **Right to be informed**: Full transparency on how data is used.
- **Right of access**: Request copies of stored personal data.
- **Right to rectification**: Correct inaccurate or outdated records.
- **Right to erasure ("Right to be forgotten")**: Subject to statutory retention requirements (e.g., 6 years for tax audit defense).
- **Right to restrict processing**: Limit processing under contested accuracy.
- **Right to data portability**: Receive data in a structured, machine-readable format.
- **Right to lodge a complaint**: Contact the **Nigeria Data Protection Commission (NDPC)** at `complaints@ndpc.gov.ng` or via `https://ndpc.gov.ng`.

### 5. Security & Breach Notification
- Technical, organizational, and physical safeguards (encryption at rest/in transit, role-based access control, Row Level Security).
- **72-Hour Breach Notification**: Mandatory notification to the NDPC within 72 hours of becoming aware of a high-risk personal data breach, and to affected data subjects without undue delay.

### 6. Cross-Border Data Transfers (Section 41-43 NDPA 2023)
- Processing using international cloud providers (e.g., Supabase / AWS / Vercel) must satisfy NDPC adequacy decisions, Standard Contractual Clauses (SCCs), or explicit consent.

---

## 3. Mandatory Terms of Engagement / HR Center Multi-Tenant Rules

When generating Terms of Service for Trustline HR Center:
- **Tenant Isolation**: Each company operates within a distinct subdomain and workspace; company admins are Data Controllers for their employee data, while Trustline acts as the Data Processor.
- **Defensible Records Standard**: Prohibition of fraudulent reporting, under-declaration, or fictitious staff.
- **Data Retention & Portability**: 6-year defensible tax archive policy in line with FIRS and State Internal Revenue Service audit standards.
