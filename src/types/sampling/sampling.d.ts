declare module 'poisson-disk-sampling' {
  class PoissonDiskSampling {
    constructor(options: {
      shape: number[];
      minDistance: number;
      maxDistance?: number;
      tries?: number;
      distanceFunction?: (point: number[]) => number;
      bias?: number;
    });
    fill(): number[][];
    getAllPoints(): number[][];
    getRandomPoint(): number[];
    addRandomPoint(): number[];
    addPoint(point: number[]): number[];
    next(): number[] | null;
    reset(): void;
  }
  export = PoissonDiskSampling;
}