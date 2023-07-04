// Icons
import { PaperClipIcon } from '@heroicons/react/24/solid'
import React from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
} 

import type {
    WithTitleAndPillActionsTextAreaComponentProps
} from '@/types'

const WithTitleAndPillActionsTextArea = ({ handleCreatePosts }: WithTitleAndPillActionsTextAreaComponentProps) => {

    const buttonStates = {
      'idle': 'Create',
      'loading': 'Uploading...'
    }

    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [submitButtonText, setSubmitButtonText] = React.useState(buttonStates.idle)
    const [isDisabled, setIsDisabled] = React.useState(false);

    function setTimeoutAsync(ms: number): Promise<void> {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    }
    
    async function handleSubmit() {
      
      setIsDisabled(true);

      setSubmitButtonText(buttonStates.loading)
      
      await setTimeoutAsync(2000);
      
      handleCreatePosts(title, description)
      
      setTitle('')
      setDescription('')
      
      setSubmitButtonText(buttonStates.idle)

      setIsDisabled(false);
    }


    return(
        <form action="#" className="relative" onSubmit={(event) => {
          event.preventDefault()
          handleSubmit()
        }}>
        <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
          <label htmlFor="title" className="sr-only">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="text-gray-900 block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
            placeholder="Title"
            required
            aria-label='This is the title for the post'
            value={title}
            onChange={(event) => {
              setTitle(event.target.value)
            }}
          />
          <label htmlFor="description" className="sr-only">
            Description
          </label>
          <textarea
            rows={2}
            name="description"
            id="description"
            className="text-gray-900 block w-full border-0 py-0 resize-none placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Write a description..."
            required
            aria-label='This is the description for the post'
            value={description}
            onChange={(event) => {
              setDescription(event.target.value)
            }}
          />
  
          {/* Spacer element to match the height of the toolbar */}
          <div aria-hidden="true">
            <div className="py-2">
              <div className="h-9" />
            </div>
            <div className="h-px" />
            <div className="py-2">
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>
        </div>
  
        <div className="absolute bottom-0 inset-x-px">
          <div className="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3">
            <div className="flex">
              <button
                type="button"
                className="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group"
              >
                <PaperClipIcon className="-ml-1 h-5 w-5 mr-2 group-hover:text-gray-500" aria-hidden="true" />
                <span className="text-sm text-gray-500 group-hover:text-gray-600 italic">Attach a file</span>
              </button>
            </div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                disabled={isDisabled}
              >
                {submitButtonText}
              </button>
            </div>
          </div>
        </div>
      </form>
    )
}

export default WithTitleAndPillActionsTextArea;
