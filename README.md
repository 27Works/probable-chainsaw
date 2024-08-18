# 27W Coding Task

### checklist

1. blur backdrop header ✅
2. colored text gradients ✅
3. header logo ✅
4. footer content?
5. fetch dealers ✅
6. fetch specific post ✅
7. add fonts ✅
8. add all images
9. add custom classes via @apply for inputs ☑️ (just added a const of classnames) ✅
10. footer socials
11. button spacings ✅
12. input spacings ✅
13. yellow active nav ✅
14. cache
15. 'You might also like' section

# Notes

1. Just to show different headers with username or button, conditionally showing via pathname. Usually would do via auth user or session, but wanted to show both headers
2. Added zod validation for the client, zod checks first, preventing anything to be sent until all conditions match. Custom errors included
3. Mapped over all slugs and added to /posts (left this page unstyled)
4. Added a basic loading state (did not add any Suspense wrappers, usually would along with some skeletons and non-fetched data)
