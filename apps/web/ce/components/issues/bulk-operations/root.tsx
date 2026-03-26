/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { observer } from "mobx-react";
// hooks
import { useMultipleSelectStore } from "@/hooks/store/use-multiple-select-store";
import type { TSelectionHelper } from "@/hooks/use-multiple-select";
import { cn } from "@plane/utils";

type Props = {
  className?: string;
  selectionHelpers: TSelectionHelper;
};

export const IssueBulkOperationsRoot = observer(function IssueBulkOperationsRoot(props: Props) {
  const { className, selectionHelpers } = props;
  // store hooks
  const { isSelectionActive } = useMultipleSelectStore();

  if (!isSelectionActive || selectionHelpers.isSelectionDisabled) return null;

  return (
    <div className={cn("sticky bottom-0 left-0 z-[2] grid h-14 place-items-center px-3.5", className)}>
      <div className="flex h-10 w-full items-center justify-center rounded-md border border-subtle bg-layer-1 px-3.5 py-2">
        <p className="text-sm text-secondary">
          {selectionHelpers.getSelectedEntityIds().length} item(s) selected — bulk property update coming soon
        </p>
      </div>
    </div>
  );
});
