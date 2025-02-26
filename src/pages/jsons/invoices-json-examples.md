---
layout: '@/layouts/PageLayout.astro'  
title: Formato JSON para Facturación
---

## Estructura JSON para Factura de ejemplo


```json
{
  "invoice": {
    "invoice_number": "FAC-2023-0456",
    "issue_date": "2023-10-25",
    "due_date": "2023-11-25",
    "currency": "EUR",
    "company": {
      "name": "Tecnologías Innovadoras S.L.",
      "address": {
        "street": "Calle Tecnología 42",
        "city": "Madrid",
        "postal_code": "28013",
        "country": "España"
      },
      "tax_id": "ESB12345678",
      "phone": "+34 910 000 001",
      "email": "facturacion@tecnologiasinnovadoras.es"
    },
    "client": {
      "name": "Soluciones Digitales S.A.",
      "address": {
        "street": "Avenida Digital 75",
        "city": "Barcelona",
        "postal_code": "08001",
        "country": "España"
      },
      "tax_id": "ESB87654321"
    },
    "shipping": {
      "name": "Almacén Central Soluciones Digitales",
      "address": {
        "street": "Calle Logística 90",
        "state1": "Cataluña",
        "state2": "Barcelona Provincia",
        "city": "Hospitalet de Llobregat",
        "postal_code": "08901",
        "country": "España"
      },
      "contact_phone": "+34 933 000 999"
    },
    "items": [
      {
        "sku": "SW-1001",
        "description": "Licencia Software Empresarial (1 año)",
        "quantity": 5,
        "unit_price": 299.99,
        "tax_rate": 0.21
      },
      {
        "sku": "HW-2005",
        "description": "Servidor Cloud Premium",
        "quantity": 2,
        "unit_price": 899.50,
        "tax_rate": 0.21
      }
    ],
    "payment_details": {
      "method": "Transferencia Bancaria",
      "iban": "ES12 3456 7890 1234 5678 9012",
      "swift": "BANKESMMXXX"
    },
    "notes": "Factura sujeta a retención IRPF del 15%.\nEnvío programado para 48 horas."
  }
}

```
