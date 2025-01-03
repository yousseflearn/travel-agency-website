'use client';

import * as React from 'react';
import {
  BookOpenCheck,
  ChevronsDownUp,
  ChevronsUpDownIcon,
  Hotel,
  Plus,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

export function NavMenu() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ChevronsUpDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer flex gap-2"
          onClick={() => router.push('/hotel/new')}
        >
          <Plus size={15} />
          <span>Add hotel</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex gap-2"
          onClick={() => router.push('/myHotel')}
        >
          <Hotel size={15} />
          <span>my hotels</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex gap-2"
          onClick={() => router.push('/hotel/new')}
        >
          <BookOpenCheck size={15} />
          <span>my booking</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
