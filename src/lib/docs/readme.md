## So, what is this?

Digital accessibility can be difficult.

Interpreting the [accessibility guidelines](https://www.w3.org/TR/WCAG21/) is one piece of the puzzle. Even learning to maneuver the [w3.org](https://www.w3.org/WAI/) has a steep learning curve. And that's to say nothing about learning how to use assistive technologies, what policies and regulations are at play, how to conduct audits and tests, or actually design or develop something using accessible patterns and [ARIA](https://www.w3.org/TR/wai-aria/).

There are many, many excellent resources for learning _why_ digital accessibility is a necessity. If you're landing here, I'll assume:

- You need to make your digital property accessible
- You're somewhat familiar with why it's a good practice
- You're frustrated reading through pages and pages -- and pages and pages and pages -- of dense documentation to make even a simple component accessible

There are many resources that are thorough, thoughtful, but _extremely_ verbose. This project is an attempt to address that problem. You -- as a designer, developer, product owner, or someone generally responsible for the accessibility of a digital product -- should be able to scan an article to get a sense of what the functional requirements are. The actual technical implementation takes some care, but everything springs from fairly simple requirements. And that's what we aim to accomplish:

- Documentation for core components and patterns that also account for possible variants
- A description of the functional requirements
- A note on the expected behavior
- Examples of technical techniques, not production-ready code
- A list of helpful resources

The information here will not be perfect. Some of it might not even be complete. The authors are only human. But the hope is to at least get you pointed in the right direction and to add as much information -- and update it as fast -- as possible.

## And What's a "Functional Requirement"?

A functional requirement describes the behavior rather than implementation details.

For example, if we were discussing labels and controls, we can communicate the accessibility requirement by saying the label needs to be programmatically associated with its control rather than just saying a `for` attribute needs to point to the id of the control it describes.

In the latter case we do not give the developer any freedom to implement this in any other case. If they're working in a design system or a large, complex codebase, this can cause headaches.

But in the former case, we communicate that something needs to be the case and give them the space to build this however they would like, so long as the requirement is met. They can use the `for` attribute, or perhaps they're going to wrap the control in the `label` element.

An analogy to software development would be the difference between declarative and imperative programming.

## But Why Not Just Make a Design System?

There are a limited number of component types. Their variations approach infinity, however. A design system takes an opinionated position on those components, should the product need them, and that's great.

What the accessibility space is missing is easy-to-reference component-based documentation that accessibility experts, designers, and developers can use to get a sense of how _their_ specific component -- with all its unique business needs -- might be built accessibly.

## Can I Contribute?

## I've never used Git or Github. How can I contribute? 
