'use client';
import React, { useState } from 'react';
import AuthLayout from '../../../components/layout/AuthLayout';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Label } from '@/components/ui/label';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start creating and protecting your content today"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className='flex justify-between flex-col gap-1'>

          <Label className='text-md font-bold'>Full name</Label>
          <Input
            placeholder="Full name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

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
        <div className='flex justify-between flex-col gap-1'>
          <Label className='text-md font-bold'>Confirm password</Label>

          <Input
            placeholder="Confirm password"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />

        </div>
        <Button type="submit" className="w-full">
          Create account
        </Button>

        <div className="text-sm text-center">
          <Link href="/auth/login" className="text-purple-600 hover:text-purple-500">
            Already have an account? Sign in
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;