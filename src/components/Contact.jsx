import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react'


const Contact = () => {
  return (
    <div>
        <Popover className="relative">
            <PopoverButton className="font-semibold bg-[#1e38a3] p-1.5 text-white">Contact</PopoverButton>
            <PopoverPanel anchor="bottom" className="flex flex-col flex-nowrap mr-1.5 bg-[#1e38a3] z-50">
                <div className='p-1.5 text-white'>
                <p>Call or WhatsApp 071 937 6610</p>
                <p>Email to anele376@gmail.com</p>
                </div>
            </PopoverPanel>
        </Popover>
    </div>
  )
}

export default Contact