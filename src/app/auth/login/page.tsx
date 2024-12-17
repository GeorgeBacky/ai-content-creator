'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '../../../components/layout/AuthLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Label } from '@/components/ui/label';

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: 'demo@example.com',
    password: 'password'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    // Fake login credentials
    if (email === 'demo@example.com' && password === 'password') {
      // Redirect to dashboard
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className='flex justify-between flex-col gap-1'>
          <Label className='text-md font-bold'>Email address</Label>
          <Input
            placeholder="Email address"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className='flex justify-between flex-col gap-1'>
          <Label className='text-md font-bold'>Password</Label>
          <Input
            placeholder="Password"
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
        <div className="text-sm text-center">
          <Link href="/auth/register" className="text-purple-600 hover:text-purple-500">
            Don&apos;t have an account? Sign up
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;