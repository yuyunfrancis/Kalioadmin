import React from "react";

const CardProduct = ({ title, rate, total, icon, color, level }) => {
  return (
    <div class="relative cursor-pointer flex mr-8 flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
      <div class="flex-auto px-6 py-8">
        <div class="flex flex-row -mx-3">
          <div class="flex-none w-2/3 max-w-full px-3">
            <div>
              <p class="mb-0 font-sans font-bold leading-normal uppercase text-sm">
                {title}
              </p>
              <h5 class="mb-2 font-medium text-xl dark:text-white">{total}</h5>
              <p class="mb-0 dark:text-white dark:opacity-60">
                <span class={`font-bold leading-normal text-sm ${color}`}>
                  {rate}
                </span>
                {level}
              </p>
            </div>
          </div>
          <div class="px-3 text-right basis-1/3">
            <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-500 to-violet-500">
              {icon}
              {/* <i class="fa fa-coins "></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
