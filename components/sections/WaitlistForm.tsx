'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Toast, { ToastType } from '@/components/ui/Toast';

type FormData = { email: string };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm() {
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setToast({ message: 'Joining waitlist…', type: 'loading' });

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email.trim().toLowerCase() }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg = json?.error || 'Something went wrong. Please try again.';
        setToast({ message: msg, type: 'error' });
        if (res.status === 400) setError('email', { message: msg });
        return;
      }

      setToast({ message: "You're on the list! We'll be in touch.", type: 'success' });
      setSubmitted(true);
    } catch {
      setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="rounded-xl border border-border-grey bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 150, delay: 0.1 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600"
              >
                <motion.svg
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-display font-semibold text-trust-blue">
                  You're on the list
                </h3>
                <p className="mt-1 text-trust-blue/80">
                  We'll notify you when we launch.
                </p>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <motion.div whileHover={{ scale: 1.01 }}>
              <Label
                htmlFor="waitlist-email"
                className="mb-2 block text-sm font-medium text-trust-blue"
              >
                Email address
              </Label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <Input
                  id="waitlist-email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  error={Boolean(errors.email)}
                  className={`transition-all duration-300 ${
                    errors.email ? 'border-red-500 focus:border-red-600' : ''
                  }`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: EMAIL_REGEX,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />
              </motion.div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1.5 text-sm text-red-600"
                  role="alert"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                variant="gold"
                className="w-full sm:w-auto sm:min-w-[200px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    ⟳
                  </motion.span>
                ) : (
                  'Join Waitlist'
                )}
              </Button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onDismiss={() => setToast(null)}
        />
      )}
    </>
  );
}
