import { DateString } from "../modules/utils/time";
import { utcStringToDateString } from "../libs/dates";

export default function DateInfo({
  createdAt,
  updatedAt,
}: {
  createdAt: DateString;
  updatedAt: DateString;
}) {
  return (
    <div className="flex flex-row text-sm">
      <p>{`created:${utcStringToDateString(createdAt)}`}</p>
      <p className="ml-1">{`updated:${utcStringToDateString(updatedAt)}`}</p>
    </div>
  );
}
