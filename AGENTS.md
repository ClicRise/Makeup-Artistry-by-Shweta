<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All business data (prices, packages, phone, WhatsApp link builder) lives in src/lib/site.ts — single source so placeholder prices are easy to change.
- Service and package detail pages are thin route files rendering shared components from src/components/detail-pages.tsx — keeps 10 near-identical pages consistent.
- No backend: bookings and enquiries only open a WhatsApp click-to-chat link; nothing is stored.
