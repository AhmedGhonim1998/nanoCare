// contact.component.ts
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class ContactComponent implements OnInit {
  particles: { x: number; y: number; delay: number }[] = [];
  contactForm: FormGroup;
  isSubmitting = false;
  activeFAQ: number | null = null;

  
  
  faqs = [
    {
      question: "What makes NanoCare supplements different from traditional ones?",
      answer: "Our liposomal technology encapsulates nutrients in phospholipid bubbles, protecting them from stomach acid and delivering up to 98% absorption directly to your cells, compared to 10-20% with traditional supplements."
    },
    {
      question: "How long does shipping take in Egypt?",
      answer: "We offer same-day delivery in Cairo and 2-3 day shipping across Egypt. All orders are processed within 24 hours and shipped via trusted courier partners with real-time tracking."
    },
    {
      question: "Are NanoCare supplements suitable for vegetarians?",
      answer: "We offer both marine and bovine collagen options. Our marine collagen is suitable for pescatarians, while our vitamin formulations are plant-based and suitable for vegetarians and vegans."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund, no questions asked."
    },
    {
      question: "How should I store my supplements?",
      answer: "Store in a cool, dry place away from direct sunlight. Our liposomal formulas are stable at room temperature, but for optimal freshness, we recommend storage below 25°C."
    },
    {
      question: "Can I take multiple supplements together?",
      answer: "Yes, our formulations are designed to work synergistically. However, we recommend consulting with your healthcare provider before starting any new supplement regimen, especially if you have pre-existing conditions."
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      newsletter: [true]
    });
  }

  ngOnInit() {
    this.generateParticles();
  }

  generateParticles() {
    for (let i = 0; i < 15; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5
      });
    }
  }

  toggleFAQ(index: number) {
    this.activeFAQ = this.activeFAQ === index ? null : index;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.isSubmitting = false;
        this.contactForm.reset();
        
        // Show success message (you can implement a toast/notification)
        alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      }, 1500);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}