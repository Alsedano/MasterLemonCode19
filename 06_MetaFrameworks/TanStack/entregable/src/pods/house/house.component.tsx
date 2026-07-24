import React from 'react';
import { HouseVm } from './house.vm';

interface Props {
  house: HouseVm;
}

export const House: React.FC<Props> = ({ house }) => {
  return (
    <>
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <img
          src={house.image || ''}
          alt={house.image}
          className="h-[340px] w-full object-contain"
        />

        <div className="space-y-3 p-4">
          <p className="text-base font-medium text-slate-800">{house.name}</p>

          {/* <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={picture.selected}
              onChange={(e) => handleBuyItem(e, picture.id)}
              className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
            />
            Buy
          </label> */}
        </div>
      </div>
    </>
  );
};
