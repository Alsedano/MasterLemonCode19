interface Props {
  children: React.ReactNode;
}

const HousesLayout = (props: Props) => {
  const { children } = props;
  return <>{children}</>;
};

export default HousesLayout;
