import { HouseContainer } from '#pods/house';
import { mapHouseItemToVm } from '#pods/house/repository';

interface Props {
  children: React.ReactNode;
}

const HousesLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <div
        style={{
          backgroundColor: 'teal',
          color: 'white',
        }}
      >
        Common layout
      </div>
      {/* <HouseContainer house={mapHouseItemToVm(house)}></HouseContainer> */}
      {children}
    </>
  );
};

export default HousesLayout;
