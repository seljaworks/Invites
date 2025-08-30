import { Redirect } from 'expo-router';

export default function Home() {
  return <Redirect href="/welcome" />;
  // return (
  //   <>
  //     <Stack.Screen options={{ title: 'Home' }} />
  //     <Container>
  //       <ScreenContent path="app/index.tsx" title="Home"></ScreenContent>
  //       <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
  //         <Button title="Show Details" />
  //       </Link>
  //     </Container>
  //   </>
  // );
}
