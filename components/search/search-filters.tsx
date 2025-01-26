'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface SearchFiltersProps {
  onSearch: (filters: SearchFilters) => void;
}

interface SearchFilters {
  query: string;
  minPrice: number;
  maxPrice: number;
  categories: string[];
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    minPrice: 0,
    maxPrice: 1000,
    categories: [],
  });

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={filters.query}
            onChange={(e) => setFilters({ ...filters, query: e.target.value })}
            className="pl-9"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-sm font-medium">Price Range</label>
                <div className="mt-2">
                  <Slider
                    min={0}
                    max={1000}
                    step={10}
                    value={[filters.minPrice, filters.maxPrice]}
                    onValueChange={([min, max]) =>
                      setFilters({ ...filters, minPrice: min, maxPrice: max })
                    }
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>${filters.minPrice}</span>
                    <span>${filters.maxPrice}</span>
                  </div>
                </div>
              </div>
              <Button onClick={handleSearch} className="w-full">
                Apply Filters
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}