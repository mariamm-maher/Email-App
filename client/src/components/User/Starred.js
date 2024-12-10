import React from "react";


const Starred=()=>{


return(<>

<div class=" w-5/6 sm:ml-64 ">
<div class="p-4  mt-14 ">
  
  
<ul class="w-full  divide-y divide-gray-200 dark:divide-gray-700">

<li class="pb-3 sm:pb-4">
  <div class="flex items-center space-x-4 rtl:space-x-reverse">
    <div >
        <ul class="grid grid-cols-2 gap-1">
            <li class="flex items-center p-3">

                <input id="select-checkbox" type="checkbox" value="" class="w-4 h-4 border-gray-300 rounded focus:ring-neonMintGreen dark:focus:ring-neonMintGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

            </li>
        </ul>
    </div>

     <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
           Neil Sims
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
        Neil@mailer.com
        </p>
     </div>


  </div>
</li>


<li class="py-3 sm:py-4">
  <div class="flex items-center space-x-4 rtl:space-x-reverse">
  <div >
    <ul class="grid grid-cols-2 gap-1">
        <li class="flex items-center p-3">
          <input id="select-checkbox" type="checkbox" value="" class="w-4 h-4 border-gray-300 rounded focus:ring-neonMintGreen dark:focus:ring-neonMintGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

        </li>
    </ul>
    </div>
     <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
           Bonnie Green
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
        Bonnie@mailer.com
        </p>
     </div>
     
  </div>
</li>


    <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <div >
                <ul class="grid grid-cols-2 gap-1">
                    <li class="flex items-center p-3">
                    <input id="select-checkbox" type="checkbox" value="" class="w-4 h-4 border-gray-300 rounded focus:ring-neonMintGreen dark:focus:ring-neonMintGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    </li>
                </ul>
            </div>
         <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
           Michael Gough
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
        Michael@mailer.com
        </p>
             </div>
        </div>
        </li>
        </ul>
</div>



  </div>
</>)






}

export default Starred;