import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { HouseVm } from './house.vm';
import { Image } from '@unpic/react';

interface Props {
  house: HouseVm;
  handleHouseBooking;
}

export const House: React.FC<Props> = ({ house, handleHouseBooking }) => {
  const navigate = useNavigate();
  const averageRating =
    house.reviews.length > 0
      ? (
          house.reviews.reduce((total, review) => total + review.rating, 0) /
          house.reviews.length
        ).toFixed(1)
      : '0.0';

  return (
    <div className="flex  items-center justify-center bg-slate-50 px-4 py-8 w-4xl">
      <div className="w-full max-w-5xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col lg:flex-row">
          <Image
            src={house.image || ''}
            alt={house.name}
            className="h-80 w-full object-cover lg:h-full lg:w-[45%]"
            width={400}
            aspectRatio={1}
            layout="constrained"
          />

          <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-slate-800">
                  {house.name}
                </h2>
                <p className="text-sm text-slate-500">
                  {house.address}, {house.city} - {house.country}
                </p>
              </div>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                {house.price}€ /noche
              </span>
            </div>

            <p className="text-sm leading-6 text-slate-600">
              {house.description}
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="font-medium text-slate-800">Bedrooms</p>
                <p>{house.bedrooms}</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="font-medium text-slate-800">Bathrooms</p>
                <p>{house.bathrooms}</p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-4">
              <div>
                <p className="text-sm font-medium text-slate-700">
                  Reviews: {house.reviews.length}
                </p>
                <p className="text-sm text-slate-500">
                  Rating: {averageRating}/5
                </p>
              </div>

              <button
                className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                onClick={handleHouseBooking}
              >
                {house.isBooked ? 'Descartar reserva' : 'Reservar'}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-t border-slate-200 pt-4 m-4 gap-10">
          {house.reviews.map((review) => (
            <div>
              <span>{review.author}</span>
              <div className="flex flex-row items-center gap-9">
                <div className="flex flex-row items-center">
                  <Image
                    src="/icon-star.png"
                    width={20}
                    aspectRatio={1}
                    layout="constrained"
                  />
                  {review.rating}
                </div>
                <span>{review.date}</span>
              </div>
              <div>
                <span>{review.comment}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            onClick={() => {
              navigate({ to: '/houses', search: { filter: '' } });
            }}
          >
            Ir a listado de casas
          </button>
        </div>
      </div>
    </div>
  );
};
