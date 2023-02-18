import { ChatBubbleLeftIcon, ClipboardIcon, DocumentPlusIcon } from '@heroicons/react/20/solid'

export const serviceWorkflowArray = [
    {
        name: 'Notion.',
        description: "On day one we set up a Notion page for your project with a roadmap and board of our day-to-day task.",
        icon: ClipboardIcon,
    },
    {
        name: 'Slack.',
        description:"We share our progress regularly, discuss ideas with you in real-time on Slack",
        icon: ChatBubbleLeftIcon,
    },
    {
        name: 'Documentation.',
        description: "We write code for humans, not just for browsers. Should you want to work on the codebase yourself or need to work with another agency in the future.",
        icon: DocumentPlusIcon,
    },
]