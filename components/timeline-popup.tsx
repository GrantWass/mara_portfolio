import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  
  interface TimelineItem {
    company: string
    role: string
    startDate: string
    bulletPoints: string[]
  }

  interface TimelinePopupProps {
    item: TimelineItem
    isOpen: boolean
    onClose: () => void
  }
  
  export function TimelinePopup({ item, isOpen, onClose }: TimelinePopupProps) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{item.company}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <h3 className="font-semibold text-lg">{item.role}</h3>
            <p className="text-sm text-gray-500 mb-4">{item.startDate}</p>
            <ul className="list-disc list-inside space-y-2">
              {item.bulletPoints.map((point, index) => (
                <li key={index} className="text-sm">{point}</li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  
  