// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
// import { CartItem } from '@/lib/types';
// import { formatPrice } from '@/lib/utils';
// import { Minus, Plus, ShoppingCart, Trash2, FileDown } from 'lucide-react';
// import jsPDF from "jspdf";

// interface CartProps {
//   items: CartItem[];
//   onUpdateQuantity: (itemIndex: number, newQuantity: number) => void;
//   onRemoveItem: (itemIndex: number) => void;
// }

// export function Cart({ items, onUpdateQuantity, onRemoveItem }: CartProps) {
//   const [isOpen, setIsOpen] = useState(false);

//   const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   // Helper function to format price for PDF
//   const formatPriceForPDF = (amount: number) => {
//     return `Rs.${formatPrice(amount)}`;
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     const margin = 20;
//     let y = margin;


//     // Add header
//     doc.setFontSize(22);
//     doc.text('GURUKRUPA TRADERS', margin, y);
//     y += 15;

//     doc.setFontSize(20);
//     doc.text('INVOICE', margin, y);
//     y += 15;

//     // Add date
//     doc.setFontSize(12);
//     doc.text(`Date: ${new Date().toLocaleDateString()}`, margin, y);
//     y += 15;

//     // Add items
//     doc.setFontSize(12);
//     items.forEach((item) => {
//       if (y > 270) {
//         doc.addPage();
//         y = margin;
//       }

//       doc.text(`${item.product.name} (${item.selection.size}, ${item.selection.density}, ${item.selection.dimension}mm)`, margin, y);
//       y += 7;
//       doc.text(`Quantity: ${item.quantity} × ${formatPriceForPDF(item.price)} = ${formatPriceForPDF(item.price * item.quantity)}`, margin + 10, y);
//       y += 10;
//     });

//     // Add total
//     y += 5;
//     doc.setFont('arial', 'bold');
//     doc.text(`Total Amount: ${formatPriceForPDF(totalAmount)}`, margin, y);

//     // Save the PDF
//     doc.save('invoice.pdf');
//   };

//   return (
//     <Sheet open={isOpen} onOpenChange={setIsOpen}>
//       <SheetTrigger asChild>
//         <Button variant="outline" size="icon" className="relative">
//           <ShoppingCart className="h-5 w-5" />
//           {items.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
//               {items.length}
//             </span>
//           )}
//         </Button>
//       </SheetTrigger>
//       <SheetContent className="w-full sm:max-w-lg">
//         <SheetHeader>
//           <SheetTitle>Shopping Cart</SheetTitle>
//         </SheetHeader>
//         {items.length === 0 ? (
//           <div className="flex flex-col items-center justify-center h-full">
//             <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
//             <p className="text-muted-foreground">Your cart is empty</p>
//           </div>
//         ) : (
//           <div className="flex flex-col h-full">
//             <ScrollArea className="flex-1">
//               <div className="space-y-4 pr-4">
//                 {items.map((item, index) => (
//                   <div key={`${item.product.id}-${index}`} className="flex flex-col gap-2 border-b pb-4">
//                     <div className="flex justify-between items-start gap-4">
//                       <div>
//                         <h4 className="font-medium">{item.product.name}</h4>
//                         <p className="text-sm text-muted-foreground">
//                           {item.selection.size}, {item.selection.density}, {item.selection.dimension}mm
//                         </p>
//                       </div>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() => onRemoveItem(index)}
//                       >
//                         <Trash2 className="h-4 w-4" />
//                       </Button>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center gap-2">
//                         <Button
//                           variant="outline"
//                           size="icon"
//                           onClick={() => onUpdateQuantity(index, item.quantity - 1)}
//                           disabled={item.quantity <= 1}
//                         >
//                           <Minus className="h-4 w-4" />
//                         </Button>
//                         <span className="w-8 text-center">{item.quantity}</span>
//                         <Button
//                           variant="outline"
//                           size="icon"
//                           onClick={() => onUpdateQuantity(index, item.quantity + 1)}
//                         >
//                           <Plus className="h-4 w-4" />
//                         </Button>
//                       </div>
//                       <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </ScrollArea>
//             <div className="border-t pt-4 space-y-4">
//               <div className="flex justify-between items-center">
//                 <span className="font-medium">Total</span>
//                 <span className="font-bold text-lg">{formatPrice(totalAmount)}</span>
//               </div>
//               <div className="flex gap-4">
//                 <Button className="flex-1" onClick={generatePDF}>
//                   <FileDown className="mr-2 h-4 w-4" />
//                   Download Invoice
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </SheetContent>
//     </Sheet>
//   );
// }

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { CartItem } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { Minus, Plus, ShoppingCart, Trash2, FileDown } from 'lucide-react';
// @ts-ignore
import html2pdf from 'html2pdf.js/dist/html2pdf.bundle.min.js';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (itemIndex: number, newQuantity: number) => void;
  onRemoveItem: (itemIndex: number) => void;
}

export function Cart({ items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const generatePDF = async () => {
    try {
      setIsGenerating(true);
      
      const invoiceContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto;">
          <div style="margin-bottom: 30px;">
        <img src="gktLogo.png" alt="Logo" style="width: 100px; margin-bottom: 10px;" />
        <h1 style="margin: 0; font-size: 24px; color: #333;">
          <span style="color: red; font-weight: bold;">GURUKRUPA</span> 
          <span style="color: darkblue; font-weight: bold;">TRADERS</span>
        </h1>
        <h2 style="margin: 10px 0; font-size: 20px; color: #666;">INVOICE</h2>
        <p style="margin: 5px 0; color: #666;">Date: ${new Date().toLocaleDateString()}</p>
          </div>

          <div style="margin-bottom: 30px;">
        ${items.map(item => `
          <div style="border-bottom: 1px solid #eee; padding: 10px 0; margin-bottom: 10px;">
            <div style="margin-bottom: 5px;">
          <strong>${item.product.name}</strong>
          <br />
          <span style="color: #666; font-size: 14px;">
            ${item.selection.size}, ${item.selection.density}, ${item.selection.dimension}mm
          </span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
          <span>Quantity: ${item.quantity}</span>
          <span>${formatPrice(item.price * item.quantity)}</span>
            </div>
          </div>
        `).join('')}
          </div>

          <div style="text-align: right; margin-top: 20px; padding-top: 20px; border-top: 2px solid #333;">
        <h3 style="margin: 0; font-size: 18px;">Total Amount: ${formatPrice(totalAmount)}</h3>
          </div>
        </div>
      `;

      const element = document.createElement('div');
      element.innerHTML = invoiceContent;

      const opt = {
        margin: 1,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <ScrollArea className="flex-1">
              <div className="space-y-4 pr-4">
                {items.map((item, index) => (
                  <div key={`${item.product.id}-${index}`} className="flex flex-col gap-2 border-b pb-4">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-medium">{item.product.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.selection.size}, {item.selection.density}, {item.selection.dimension}mm
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onRemoveItem(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total</span>
                <span className="font-bold text-lg">{formatPrice(totalAmount)}</span>
              </div>
              <div className="flex gap-4">
                <Button 
                  className="flex-1" 
                  onClick={generatePDF}
                  disabled={isGenerating}
                >
                  <FileDown className="mr-2 h-4 w-4" />
                  {isGenerating ? 'Generating...' : 'Download Invoice'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}