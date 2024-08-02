declare module 'react-barcode-reader' {
    interface BarcodeReaderProps {
      onError?: (error: any) => void;
      onScan?: (data: string) => void;
    }
  
    const BarcodeReader: React.FC<BarcodeReaderProps>;
  
    export default BarcodeReader;
  }
  