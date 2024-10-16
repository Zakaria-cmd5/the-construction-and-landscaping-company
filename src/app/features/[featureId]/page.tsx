interface Props {
  params: { featureId: string };
}

const FeatureDetailPage = ({ params }: Props) => {
  return <div>{params.featureId}</div>;
};

export default FeatureDetailPage;
