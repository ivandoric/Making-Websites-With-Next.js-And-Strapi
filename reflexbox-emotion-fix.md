# Reflexbox Emotion Fix

There is problem with new version of Emotion for [this episode](https://www.youtube.com/watch?v=ERFqQphWLhk). Viewers have reported that Reflexbox doesn't play well with it.

*There are two possible solutions:*

#### Solution 1

1. Check [package.json used in this video](https://github.com/ivandoric/Making-Websites-With-Next.js-And-Strapi/blob/master/package.json)
2. Set Emotion plugins versions locally in your package.json (@emotion/core, @emotion/styled, emotion-theming)
3. Remove node_modules
4. Run `npm install` 

Now you have downgraded Emotion to version 10. And Reflex box should now work as expected.

#### Solution 2 (this one has some problems)

1. Install @emotion/react `npm install @emotion/react`
2. In your _app.js import `ThemeProvider` from `@emotion/react` instead of `emotion-theming` like this:

```js
import { ThemeProvider } from '@emotion/react'
```

Now Emotion should work, however there are some problems. First of all for some reason `theme` that you define on `ThemeProvider` doesn't automatically apply to`<Box>` and `<Flex>` elements in your components. So you have to add them manually whenever you are using them in your componets. Like this:

```jsx
// MyAwesomeComponent
...
import theme from '../theme/theme.js'

function MyAwesomeComponent({my, props}) {
    return(
        <Flex theme={theme} ...>
            <Box theme={theme} ...>
                Hello World
            </Box>
        </Flex>
    )
}

...
```

The other thing is that breakpoints will work only in the way that I showed first in the video, so you won't be able to define them like this:

```jsx
<Flex flexDirection={{ _: "column", md: "row" }}>
```

But instead you have to define them like:

```jsx
<Flex flexDirection={['column', null, null, 'row']}>
```

So if you want to use Emotion 11, you will have to deal with these two things. 

