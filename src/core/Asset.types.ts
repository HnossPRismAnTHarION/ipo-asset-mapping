/**
 * Core Asset Type Definitions
 * Defines all types used throughout the asset mapping system
 */

export enum AssetStatus {
  DESIGN = 'design',
  CONSTRUCTION = 'construction',
  COMMISSIONED = 'commissioned',
  OPERATIONAL = 'operational',
  MAINTENANCE = 'maintenance',
  RETIRED = 'retired',
}

export enum MaintenanceFrequency {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  SEMI_ANNUAL = 'semi-annual',
  ANNUAL = 'annual',
  ON_DEMAND = 'on-demand',
}

export interface Location {
  building: string;
  floor: string | number;
  zone?: string;
  room?: string;
  coordinates?: {
    x: number;
    y: number;
    z?: number;
  };
}

export interface Manufacturer {
  name: string;
  model: string;
  partNumber?: string;
  serialNumber?: string;
  category?: string;
}

export interface Warranty {
  startDate: Date;
  endDate: Date;
  type: 'parts' | 'labor' | 'full';
  coverage?: string;
}

export interface MaintenanceTask {
  task: string;
  frequency: MaintenanceFrequency;
  estimatedDuration: number; // minutes
  spares?: string[];
  qualifications?: string[];
  notes?: string;
}

export interface Commissioning {
  date: Date;
  status: 'passed' | 'failed' | 'conditional';
  certificationNumber?: string;
  commissioner?: string;
  notes?: string;
}

export interface DesignPhaseData {
  id: string;
  description: string;
  type: string;
  location: Location;
  expectedQuantity?: number;
  specifications?: Record<string, unknown>;
}

export interface ConstructionPhaseData {
  id: string;
  manufacturer: Manufacturer;
  warranty: Warranty;
  deliveryDate?: Date;
  installationDate?: Date;
  tagId?: string; // Barcode/QR code identifier
  asInstalledNotes?: string;
}

export interface HandoverPhaseData {
  id: string;
  commissioning: Commissioning;
  maintenanceTasks: MaintenanceTask[];
  operationalDocuments?: string[];
  trainingCompleted?: boolean;
  handoverDate: Date;
}

export interface CompleteAssetData {
  id: string;
  status: AssetStatus;
  description: string;
  type: string;
  location: Location;
  manufacturer?: Manufacturer;
  warranty?: Warranty;
  maintenanceTasks?: MaintenanceTask[];
  commissioning?: Commissioning;
  lifecycle: {
    designDate?: Date;
    constructionStartDate?: Date;
    handoverDate?: Date;
    retirementDate?: Date;
  };
  metadata?: Record<string, unknown>;
}

export interface Asset {
  id: string;
  description: string;
  type: string;
}
