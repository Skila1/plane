/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { useTranslation } from "@plane/i18n";
import { ContentWrapper } from "@plane/ui";

export function WorkspaceActiveCyclesRoot() {
  const { t } = useTranslation();
  return (
    <ContentWrapper className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-center">
        <h3 className="text-lg font-semibold">{t("active_cycles")}</h3>
        <p className="max-w-md text-sm text-tertiary">
          Workspace-wide active cycles view is not yet implemented in this build. You can view active cycles per project
          from each project&apos;s cycle section.
        </p>
      </div>
    </ContentWrapper>
  );
}
