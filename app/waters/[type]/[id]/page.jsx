import WaterDetail from './WaterDetail.jsx';

export default async function WaterDetailPage({ params }) {
  const { type, id } = await params;
  
  return <WaterDetail type={type} id={id} />;
}
