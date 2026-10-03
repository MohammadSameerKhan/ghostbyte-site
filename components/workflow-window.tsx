'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

const ALT =
  'The GhostByte Auto Upload workflow in n8n: Schedule Trigger, Gemini, HTTP Request2, Read/Write Files from Disk, and Upload a video, connected left to right.'

export function WorkflowWindow() {
  const frameRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    const canTilt = window.matchMedia(
      '(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
    )
    let hovering = false
    let raf = 0

    const setTilt = (rx: number, ry: number) => {
      frame.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
      frame.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
    }

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (!canTilt.matches || hovering) return setTilt(0, 0)
        const x = event.clientX / window.innerWidth - 0.5
        const y = event.clientY / window.innerHeight - 0.5
        setTilt(-y * 4, x * 5)
      })
    }
    const onEnter = () => {
      hovering = true
      setTilt(0, 0)
    }
    const onLeave = () => {
      hovering = false
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    frame.addEventListener('pointerenter', onEnter)
    frame.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      frame.removeEventListener('pointerenter', onEnter)
      frame.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div className="[perspective:1400px]">
      <div
        ref={frameRef}
        className="transition-transform duration-700 ease-out will-change-transform"
        style={{ transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))' }}
      >
        <figure className="glass-window overflow-hidden rounded-xl bg-[#050d1c]/70 backdrop-blur-md">
          <div className="flex items-center gap-2 border-b border-primary/20 bg-white/[0.03] px-4 py-2.5">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-primary/70 shadow-[0_0_6px_rgb(0_180_255/0.8)]" />
            <span aria-hidden="true" className="size-2.5 rounded-full bg-highlight/50" />
            <span aria-hidden="true" className="size-2.5 rounded-full bg-white/20" />
            <figcaption className="ml-3 truncate font-mono text-xs text-muted-foreground">
              GhostByte Auto Upload
            </figcaption>
          </div>
          <div className="relative">
            <div
              className="overflow-x-auto"
              tabIndex={0}
              role="region"
              aria-label="Workflow screenshot, scroll horizontally to see all of it"
            >
              <button
                type="button"
                onClick={() => dialogRef.current?.showModal()}
                className="block w-full min-w-[640px] cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-highlight"
                aria-label="Open workflow screenshot full screen"
              >
                <Image src="/workflow.png" alt={ALT} width={2048} height={1284} priority className="block h-auto w-full" />
              </button>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/5 animate-scan bg-gradient-to-r from-transparent via-[#22d3ee]/12 to-transparent"
            >
              <span className="absolute inset-y-0 left-1/2 w-px bg-[#22d3ee]/40" />
            </span>
          </div>
        </figure>
      </div>
      <div
        aria-hidden="true"
        className="mx-auto -mt-2 h-8 w-[85%] rounded-[50%] bg-primary/25 opacity-70 blur-2xl"
      />

      <dialog
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-dvw max-w-none items-center justify-center bg-[#02050b]/85 p-4 backdrop:bg-black/60 backdrop:backdrop-blur-sm open:flex sm:p-10"
      >
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full border border-primary/40 bg-[#071226]/90 text-foreground transition-colors hover:border-highlight hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
        >
          <X aria-hidden="true" className="size-5" />
        </button>
        <div className="glass-window max-h-full w-full max-w-[1800px] overflow-auto rounded-xl bg-[#050d1c]">
          <Image
            src="/workflow.png"
            alt={ALT}
            width={2048}
            height={1284}
            sizes="(min-width: 1024px) 96vw, 1100px"
            className="block h-auto w-full min-w-[1000px] lg:min-w-0"
          />
        </div>
      </dialog>
    </div>
  )
}
