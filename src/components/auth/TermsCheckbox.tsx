import React from 'react';
import { Link } from 'react-router-dom';

interface TermsCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function TermsCheckbox({ checked, onChange }: TermsCheckboxProps) {
  return (
    <div className="flex items-start mb-4">
      <div className="flex items-center h-5">
        <input
          id="terms"
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
          required
        />
      </div>
      <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
        I agree to the{' '}
        <Link to="/terms" className="text-blue-600 hover:underline" target="_blank">
          Terms and Conditions
        </Link>
      </label>
    </div>
  );
}