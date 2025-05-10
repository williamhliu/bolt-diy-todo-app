import React from 'react'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group border border-gray-100 hover:border-gray-200">
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${todo.completed ? 'border-green-500 bg-green-500' : 'border-gray-300 hover:border-blue-500'}`}
      >
        {todo.completed && (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'} transition-colors`}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-all duration-200 opacity-0 group-hover:opacity-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}
