import { HtmlHTMLAttributes } from 'react'

import { cn } from '@/utils/cn'

import { SignoutButton } from './signout-button'

export default function HomeFooter({ className }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <footer
      className={cn(
        'mb-5 flex justify-center gap-2 text-center text-xs text-muted-foreground',
        className,
      )}
    >
      <a
        href=""
        target="_blank"
        className="outline-none hover:text-foreground focus:text-foreground"
      >
        Project XYZ
      </a>
      <SignoutButton className="outline-none hover:text-foreground focus:text-foreground" />
    </footer>
  )
}
