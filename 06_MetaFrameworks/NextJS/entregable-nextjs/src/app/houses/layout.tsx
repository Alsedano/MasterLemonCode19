import { HouseContainer } from '#pods/house';
import { mapHouseItemToVm } from '#pods/house/repository';

interface Props {
  children: React.ReactNode;
}

const HousesLayout = (props: Props) => {
  const { children } = props;
  return <>{children}</>;
};

export default HousesLayout;
