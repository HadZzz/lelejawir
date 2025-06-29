'use client';

import { useState, useEffect } from 'react';

interface DebugInfo {
  status: string;
  database: string;
  products: number;
  gallery: number;
  timestamp: string;
}

const DebugInfo = () => {
  const [debugInfo, setDebugInfo] = useState<DebugInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDebugInfo = async () => {
      try {
        const response = await fetch('/api/health');
        if (response.ok) {
          const data = await response.json();
          setDebugInfo(data);
        } else {
          setError('Failed to fetch debug info');
        }
      } catch (err) {
        setError('Error fetching debug info');
      } finally {
        setLoading(false);
      }
    };

    fetchDebugInfo();
  }, []);

  if (loading) {
    return (
      <div className="fixed bottom-4 right-4 bg-blue-100 border border-blue-300 rounded-lg p-3 text-sm">
        Loading debug info...
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed bottom-4 right-4 bg-red-100 border border-red-300 rounded-lg p-3 text-sm">
        <div className="font-semibold text-red-800">Debug Error</div>
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  if (!debugInfo) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-100 border border-gray-300 rounded-lg p-3 text-sm max-w-xs">
      <div className="font-semibold text-gray-800 mb-2">Debug Info</div>
      <div className="space-y-1 text-gray-600">
        <div>Status: <span className={debugInfo.status === 'healthy' ? 'text-green-600' : 'text-red-600'}>{debugInfo.status}</span></div>
        <div>Database: <span className={debugInfo.database === 'connected' ? 'text-green-600' : 'text-red-600'}>{debugInfo.database}</span></div>
        <div>Products: {debugInfo.products}</div>
        <div>Gallery: {debugInfo.gallery}</div>
        <div className="text-xs text-gray-500">{new Date(debugInfo.timestamp).toLocaleString()}</div>
      </div>
    </div>
  );
};

export default DebugInfo; 