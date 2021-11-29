---
title: Foreign Commerce
description: Plotly visualization of foreign trade
slug: foreign-trade
thumb: ../images/thumbs/foreing2.png
featured: ../images/featured/foreing2.png
tech: plotly, dash
github: https://github.com/freethrow/Belgrade-real-estate
date: 13/05/2021
---

I often work with statistical trade data - exports, imports and the couple of variables that we can derive from them - coverage, trade deficit, yearly variation… Anyway, when the Serbian Statistics Office opened several datasets, amongst them I found the very valuable Trade Datasets. First of all - *this is a tool that I really needed*, everything else follows.

The datasets are pretty simple - with fields denoting the country, the values in US Dollars and kilograms and the codes. Now, the code, SMTK they are called, are interesting because they follow a hierarchical structure and are coded with digits. The topmost level contains only one digit, from 0 to 9, the second level has two digits and the third level 3 digits. Initially I tripped over the nature of this numbers, treating them as… well - numbers. Once I realized they should be treated like strings, everything fell into place. My bad, I guess - I should have payed more attention to the meaning of the numbers that passed me by all these years.


Why this project? Well, the data laying in tables is precise and *real*, but *it doesn’t really tell a story*. Browsing endless piles of tabular data isn’t really curiosity-inciting and, most importantly - **doesn’t tell a story**.

![img](https://www.fillmurray.com/640/360) World Map of the Serbian Trade

The above picture, in my opinion, *does tell a story*. I can immediately see that Italy and Germany dominate the list of commercial partners, followed by Russia and the regional countries like Bosnia. The beauty of this map is that it regenerates for *every commodity code* which was the answer to my initial question: which countries are the main partners for a given sector.

Since I was already keen to find a dataset and play around with plotly and Dash, I felt this was the perfect opportunity. The datasets needed a bit of work, however and this is ok - it wouldn’t be much fun if it wasn’t like that?

In this post I will not get into the details of the data processing - the jupyter notebook is available [on my github](http://www.freethrow.rs/project/serbian-trade-data-on-dash/[https://github.com/freethrow/serbia-foreign-trade/blob/master/Serbian Commerce.ipynb](https://github.com/freethrow/serbia-foreign-trade/blob/master/Serbian Commerce.ipynb)). I will however describe some of the key points and steps that needed to be taken in order to transform the raw csv files provided by the Statistic Office into something Dash can make sense of.

-downloading of the files - this step *was not* automated because the data changes only once a year
-the bigger dataset, the one with the 3rd level subcategories, had errors: the fields were separated by semicolons, but the same symbol was present in some of the fields - making the files impossible to import in pandas without some preprocessing of the files. Python helps here.
-the country codes provided by the Office are composed of two letters, while the Dash maps require the so called Alpha-3 code. Search for *pycountry*.
-The exports and the imports are in separate files - they needed to be merged into one big file. Then I added the derived quantities> trade balance and total exchange. The next step could be to calculate the yearly variation: (val2-val1)/val1… Maybe I’ll add it later.

## The charts

I wanted to do a couple of visualization that I would actually find useful - some pictures that actually answer concrete real-life questions. The first one was a comparison of the trade (export, import, trade balance or total exchange) between Serbia and *one or more* countries. This was a no-brainer, with the nice added functionality of selecting the subcategory. Plotly is great because it makes switching between stacked and side-by-side charts simple and quick.

The second chart I chose is the *Category drilldown*, a chart that should answer the questions:

> Which are the main importers for **category x**? Which countries are the main players on this particular market?

I limited the number of countries to 10 because it is a realistic scenario and the chart becomes cluttered for N>10. I had to calculate the remaining value (export, import or else) and use it in the charts, in order to have the correct values in percentages.

The last chart is the same as the second, only here we are analyzing a particular country and get the main commodity groups in the trade.

Finally, the World Map is maybe the most interesting - it uses color to convey information about the trade in a particular year and for the selected categories. If find it great because it enables the user to quickly pinpoint areas and countries of interest for a particular product category.

### Deployment

I used a free instance (dyno) on Heroku and it was pretty straightforward. In the github repo I left the procfile and the only thing I had to do differently from the Dash tutorial was the explicit inclusion of Flask in the app.py file:

```python
server = Flask(__name__)
server.secret_key = 'somesecret'
app = dash.Dash(__name__, server = server, external_stylesheets=[dbc.themes.JOURNAL])
app.layout = html.Div([navbar, body])
app.title = "Data Visualization - Serbian Foreign Trade 2004 - 2018"
```

For **this particular** type of app, Heroku is not the greatest solution: since I am on a free plan, my *dyno* takes a couple of seconds to start each time I hit the home page. Since Dash is essentially a React app sitting on top of python/Flask, after a while, when the dyno stops, the user still sees the loaded page and all the charts, but they are not responsive - they do not *react* :) to the user inputs - so you have to hit refresh every hour or so…

### Further steps

There are a lot of ways in which this app could be developed further. One feature that I actually plan on adding is the ability to switch between datasets - the user should be able to choose the granularity of the SITC codes displayed. Moving away from Heroku to DigitalOcean should make the app quicker. The map could be animated, it could showcase the changing of the colors / the main commercial partners of Serbia and so on.

URL: http://serbian-trade.herokuapp.com/