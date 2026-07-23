/**
 * Generic AssetMap Framework
 * Base class for all asset mapping implementations
 */

import { Asset } from './Asset.types';

export class AssetMap<T extends Asset> {
  protected assets: Map<string, T> = new Map();

  /**
   * Add a new asset to the map
   */
  addAsset(id: string, data: T): void {
    if (this.assets.has(id)) {
      throw new Error(`Asset with id '${id}' already exists`);
    }
    this.assets.set(id, data);
  }

  /**
   * Get an asset by id
   */
  getAsset(id: string): T | undefined {
    return this.assets.get(id);
  }

  /**
   * Update an existing asset
   */
  updateAsset(id: string, data: Partial<T>): T {
    const existing = this.getAsset(id);
    if (!existing) {
      throw new Error(`Asset with id '${id}' not found`);
    }
    const updated = { ...existing, ...data };
    this.assets.set(id, updated as T);
    return updated as T;
  }

  /**
   * Remove an asset from the map
   */
  removeAsset(id: string): boolean {
    return this.assets.delete(id);
  }

  /**
   * List all assets
   */
  listAssets(): T[] {
    return Array.from(this.assets.values());
  }

  /**
   * List assets by type
   */
  listAssetsByType(type: string): T[] {
    return this.listAssets().filter((asset) => asset.type === type);
  }

  /**
   * Get asset count
   */
  getAssetCount(): number {
    return this.assets.size;
  }

  /**
   * Check if asset exists
   */
  hasAsset(id: string): boolean {
    return this.assets.has(id);
  }

  /**
   * Clear all assets
   */
  clear(): void {
    this.assets.clear();
  }

  /**
   * Export assets as JSON
   */
  exportAsJSON(): string {
    return JSON.stringify(Array.from(this.assets.entries()), null, 2);
  }

  /**
   * Import assets from JSON
   */
  importFromJSON(jsonData: string): void {
    try {
      const entries = JSON.parse(jsonData);
      this.clear();
      entries.forEach(([id, data]: [string, T]) => {
        this.assets.set(id, data);
      });
    } catch (error) {
      throw new Error(`Failed to import JSON: ${error}`);
    }
  }
}
