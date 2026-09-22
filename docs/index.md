---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: '<img src="/assets/legitimoose-api-logo.png" alt="Legitimoose API Logo" />'
  text: ""
  tagline: Documentation for Legitimoose API
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
---

## Getting Started

Start fetching `api.legiti.dev` to get several information from legitimoose.com such as worlds, players, and more!

```js{2}
async function getWorlds() {
  const response = await fetch('https://api.legiti.dev/v4/worlds');
  const worlds = await response.json();
  return worlds;
}

console.log(getWorlds()); // [{ world_uuid: "...", ... }, ...]
```

## Support

Join our [Discord server](https://discord.com/invite/gnk7ZtBSjZ) if you have any queries about our services.

## Support LegitiDevs & SkyeNetwork

LegitiDevs is supported by SkyeNetwork and we use Pyro as our host. 

You can support us by [donating](https://legiti.dev/donate) or using our code: [GEYS1ZIJ on Pyro](https://pyro.host/?ref=GEYS1ZIJ).

[![Use code GEYS1ZIJ on Pyro](/assets/pyro_ad.png)](https://pyro.host/?ref=GEYS1ZIJ)