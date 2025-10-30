import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import HomePage from '../pages/HomePage'
import DashboardPage from '../pages/DashboardPage'

export default function AppRoutes(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
