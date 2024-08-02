import React, { useState } from 'react';
import BarcodeReader from 'react-barcode-reader';

const BarcodeScanner: React.FC = () => {
  const [scannedValue, setScannedValue] = useState<string>('');

  const handleScan = (data: string) => {
    setScannedValue(data);
    console.log('Scanned value:', data);
  };

  const handleError = (err: any) => {
    console.log('Scanning barcode:', err);
    setScannedValue(err);
  };

  const extractRevision = (url: string): string | null => {
    const regex = /REVISION\/[A-F0-9-]+/;
    const match = url.match(regex);
    return match ? match[0] : null;
  };

  return (
    <div>
      <h1>Barcode Scanner</h1>
      <BarcodeReader
        onError={handleError}
        onScan={handleScan}
      />
      {scannedValue && <p>Last scanned value: {extractRevision(scannedValue)?.split('/')[1]}</p>}
    </div>
  );
};

export default BarcodeScanner;
