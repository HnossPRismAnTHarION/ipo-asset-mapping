# IPO Asset Mapping - Construction Asset Register System

## Overview

A comprehensive, production-ready system for mapping and managing IPO Assets with focus on **Construction Phase Asset Register** implementation. Built on a **generic Map Construction pattern** that can be extended for various use cases.

### Key Features

- ✅ **Generalized AssetMap Framework** - Reusable, type-safe asset mapping system
- ✅ **Construction-Grade Asset Register** - Implements CIBSE DE5 & COBie standards
- ✅ **Incremental Information Building** - Design → Construction → Handover phases
- ✅ **Three Holy Questions** - What is it? Where is it? What do we need to do?
- ✅ **Template System** - COBie standard + custom CAFM schemas
- ✅ **Lifecycle Management** - From asset purchase through disposal
- ✅ **Full TypeScript Support** - Type-safe, production-ready

## Architecture

```
┌─────────────────────────────────────────────┐
│   Generic AssetMap Framework                │
│   (Base abstraction for all mappings)       │
└────────────────────┬────────────────────────┘
                     │
         ┌───────────┼───────────┐
         │           │           │
    ┌────▼────┐ ┌───▼────┐ ┌──▼─────┐
    │ Design  │ │ Const.  │ │Handover│
    │ Phase   │ │ Phase   │ │ Phase  │
    └─────────┘ └─────────┘ └────────┘
         │           │           │
         └───────────┼───────────┘
                     │
    ┌────────────────▼────────────────┐
    │  Three Holy Questions System     │
    │  1. What is it?                 │
    │  2. Where is it?                │
    │  3. What do we need to do?      │
    └─────────────────────────────────┘
         │           │           │
    ┌────▼────┐ ┌───▼────┐ ┌──▼─────┐
    │  COBie  │ │  CAFM  │ │ Custom │
    │Template │ │Template│ │Template│
    └─────────┘ └────────┘ └────────┘
```

## Quick Start

### Installation

```bash
npm install
npm run build
npm run test
```

### Basic Usage

```typescript
import { AssetRegister } from './src/construction';

// Create a new Asset Register
const register = new AssetRegister();

// DESIGN PHASE: Identify assets and locations
register.addDesignPhaseData('PLANT-001', {
  description: 'Chiller Unit - Main Building Cooling System',
  location: { building: 'A', floor: 3, zone: 'HVAC-01' },
  type: 'plant',
});

// CONSTRUCTION PHASE: Add as-installed information
register.addConstructionPhaseData('PLANT-001', {
  manufacturer: 'Carrier',
  model: '19DV400',
  serialNumber: 'SN-2024-001',
  warrantyEndDate: '2029-03-15',
});

// HANDOVER PHASE: Add maintenance and commissioning data
register.addHandoverPhaseData('PLANT-001', {
  commissioning: { date: '2024-01-15', status: 'PASSED' },
  maintenanceTasks: [{
    task: 'Filter Replacement',
    frequency: 'monthly',
    spares: ['FILTER-19DV'],
  }],
});

// Answer the Three Holy Questions
console.log(register.whatIsIt('PLANT-001'));     // What is it?
console.log(register.whereIsIt('PLANT-001'));    // Where is it?
console.log(register.whatDoWeNeedToDo('PLANT-001')); // What to do?
```

## Standards & Compliance

- ✅ **CIBSE DE5** - Asset Information Requirements
- ✅ **COBie** - Construction Operations Building Information Exchange
- ✅ **UK BIM Framework** - Digital Plan of Works alignment
- ✅ **PAS 1192** - Building Information Management guidance

## Repository Links

- **Repository URL:** https://github.com/HnossPRismAnTHarION/ipo-asset-mapping
- **Issues:** https://github.com/HnossPRismAnTHarION/ipo-asset-mapping/issues
- **Discussions:** https://github.com/HnossPRismAnTHarION/ipo-asset-mapping/discussions

## License

MIT
