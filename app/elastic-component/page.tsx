import { ClientComponent } from './ClientComponent';
import { ServerComponent } from './ServerComponent';

export default async function Page() {
  return (
    <div className="flex gap-2">
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}
