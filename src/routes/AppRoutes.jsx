import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Collection from '../pages/Collection';
import ProductDetail from '../pages/ProductDetail';
import PassportDetail from '../pages/PassportDetail';
import Impact from '../pages/Impact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/product/:slug" element={<ProductDetail />} />
      <Route path="/passport/:id" element={<PassportDetail />} />
      <Route path="/impact" element={<Impact />} />
      {/* Catch-all redirect to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
