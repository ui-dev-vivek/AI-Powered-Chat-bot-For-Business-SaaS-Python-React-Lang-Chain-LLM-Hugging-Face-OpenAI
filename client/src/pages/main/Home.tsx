import { Button } from "@/components/tailgrids/core/button";
import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger
} from "@/components/tailgrids/core/accordion";
const items = [
  {
    id: "1",
    title: "What is your return policy?",
    content:
      "We offer a 30-day return policy on all unused items in their original packaging."
  },
  {
    id: "2",
    title: "How long does shipping take?",
    content:
      "Standard shipping typically takes 5-7 business days. Express options are available at checkout."
  },
  {
    id: "3",
    title: "Do you ship internationally?",
    content:
      "Yes, we ship to over 50 countries worldwide. International shipping rates vary by destination."
  }
];

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to MAVA</p>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
       <div className="flex flex-wrap items-end gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
     <AccordionRoot>
      {items.map(item => (
        <AccordionItem key={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
    </div>
  );
}