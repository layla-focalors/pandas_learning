### 열과 피벗 ( p153 )
깔끔한 데이터 : 데이터를 깔끔하게 정리하기  

Method  
1. Id_vars
2. value_vars
3. var_name
4. value_name


```python
import pandas as pd
df = pd.read_csv('../data/pew.csv')
df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>religion</th>
      <th>&lt;$10k</th>
      <th>$10-20k</th>
      <th>$20-30k</th>
      <th>$30-40k</th>
      <th>$40-50k</th>
      <th>$50-75k</th>
      <th>$75-100k</th>
      <th>$100-150k</th>
      <th>&gt;150k</th>
      <th>Don't know/refused</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Agnostic</td>
      <td>27</td>
      <td>34</td>
      <td>60</td>
      <td>81</td>
      <td>76</td>
      <td>137</td>
      <td>122</td>
      <td>109</td>
      <td>84</td>
      <td>96</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Atheist</td>
      <td>12</td>
      <td>27</td>
      <td>37</td>
      <td>52</td>
      <td>35</td>
      <td>70</td>
      <td>73</td>
      <td>59</td>
      <td>74</td>
      <td>76</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Buddhist</td>
      <td>27</td>
      <td>21</td>
      <td>30</td>
      <td>34</td>
      <td>33</td>
      <td>58</td>
      <td>62</td>
      <td>39</td>
      <td>53</td>
      <td>54</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Catholic</td>
      <td>418</td>
      <td>617</td>
      <td>732</td>
      <td>670</td>
      <td>638</td>
      <td>1116</td>
      <td>949</td>
      <td>792</td>
      <td>633</td>
      <td>1489</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Don’t know/refused</td>
      <td>15</td>
      <td>14</td>
      <td>15</td>
      <td>11</td>
      <td>10</td>
      <td>35</td>
      <td>21</td>
      <td>17</td>
      <td>18</td>
      <td>116</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.describe()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>&lt;$10k</th>
      <th>$10-20k</th>
      <th>$20-30k</th>
      <th>$30-40k</th>
      <th>$40-50k</th>
      <th>$50-75k</th>
      <th>$75-100k</th>
      <th>$100-150k</th>
      <th>&gt;150k</th>
      <th>Don't know/refused</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>18.000000</td>
      <td>18.000000</td>
      <td>18.000000</td>
      <td>18.000000</td>
      <td>18.000000</td>
      <td>18.000000</td>
      <td>18.000000</td>
      <td>18.000000</td>
      <td>18.000000</td>
      <td>18.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>107.222222</td>
      <td>154.500000</td>
      <td>186.500000</td>
      <td>183.444444</td>
      <td>171.388889</td>
      <td>288.055556</td>
      <td>221.666667</td>
      <td>177.611111</td>
      <td>144.888889</td>
      <td>340.055556</td>
    </tr>
    <tr>
      <th>std</th>
      <td>168.931784</td>
      <td>255.172433</td>
      <td>309.891869</td>
      <td>291.470354</td>
      <td>271.144446</td>
      <td>458.442436</td>
      <td>345.078849</td>
      <td>275.679724</td>
      <td>205.224952</td>
      <td>530.523878</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.000000</td>
      <td>2.000000</td>
      <td>3.000000</td>
      <td>4.000000</td>
      <td>2.000000</td>
      <td>7.000000</td>
      <td>3.000000</td>
      <td>4.000000</td>
      <td>4.000000</td>
      <td>8.000000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>12.250000</td>
      <td>14.750000</td>
      <td>17.000000</td>
      <td>15.750000</td>
      <td>15.000000</td>
      <td>34.250000</td>
      <td>25.250000</td>
      <td>22.500000</td>
      <td>23.750000</td>
      <td>41.250000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>20.000000</td>
      <td>27.000000</td>
      <td>33.500000</td>
      <td>40.000000</td>
      <td>34.000000</td>
      <td>66.500000</td>
      <td>65.500000</td>
      <td>48.500000</td>
      <td>53.500000</td>
      <td>74.500000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>170.000000</td>
      <td>193.000000</td>
      <td>192.000000</td>
      <td>198.750000</td>
      <td>166.750000</td>
      <td>201.500000</td>
      <td>128.750000</td>
      <td>103.500000</td>
      <td>134.250000</td>
      <td>294.750000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>575.000000</td>
      <td>869.000000</td>
      <td>1064.000000</td>
      <td>982.000000</td>
      <td>881.000000</td>
      <td>1486.000000</td>
      <td>949.000000</td>
      <td>792.000000</td>
      <td>634.000000</td>
      <td>1529.000000</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 1개의 열만 고정하고, 나머지 열을 행으로 바꾸기
```


```python
df.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>religion</th>
      <th>&lt;$10k</th>
      <th>$10-20k</th>
      <th>$20-30k</th>
      <th>$30-40k</th>
      <th>$40-50k</th>
      <th>$50-75k</th>
      <th>$75-100k</th>
      <th>$100-150k</th>
      <th>&gt;150k</th>
      <th>Don't know/refused</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Agnostic</td>
      <td>27</td>
      <td>34</td>
      <td>60</td>
      <td>81</td>
      <td>76</td>
      <td>137</td>
      <td>122</td>
      <td>109</td>
      <td>84</td>
      <td>96</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Atheist</td>
      <td>12</td>
      <td>27</td>
      <td>37</td>
      <td>52</td>
      <td>35</td>
      <td>70</td>
      <td>73</td>
      <td>59</td>
      <td>74</td>
      <td>76</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Buddhist</td>
      <td>27</td>
      <td>21</td>
      <td>30</td>
      <td>34</td>
      <td>33</td>
      <td>58</td>
      <td>62</td>
      <td>39</td>
      <td>53</td>
      <td>54</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Catholic</td>
      <td>418</td>
      <td>617</td>
      <td>732</td>
      <td>670</td>
      <td>638</td>
      <td>1116</td>
      <td>949</td>
      <td>792</td>
      <td>633</td>
      <td>1489</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Don’t know/refused</td>
      <td>15</td>
      <td>14</td>
      <td>15</td>
      <td>11</td>
      <td>10</td>
      <td>35</td>
      <td>21</td>
      <td>17</td>
      <td>18</td>
      <td>116</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.iloc[:, 0:6]
# 모든 행, 0~5(6)까지의 열 불러오기
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>religion</th>
      <th>&lt;$10k</th>
      <th>$10-20k</th>
      <th>$20-30k</th>
      <th>$30-40k</th>
      <th>$40-50k</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Agnostic</td>
      <td>27</td>
      <td>34</td>
      <td>60</td>
      <td>81</td>
      <td>76</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Atheist</td>
      <td>12</td>
      <td>27</td>
      <td>37</td>
      <td>52</td>
      <td>35</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Buddhist</td>
      <td>27</td>
      <td>21</td>
      <td>30</td>
      <td>34</td>
      <td>33</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Catholic</td>
      <td>418</td>
      <td>617</td>
      <td>732</td>
      <td>670</td>
      <td>638</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Don’t know/refused</td>
      <td>15</td>
      <td>14</td>
      <td>15</td>
      <td>11</td>
      <td>10</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Evangelical Prot</td>
      <td>575</td>
      <td>869</td>
      <td>1064</td>
      <td>982</td>
      <td>881</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Hindu</td>
      <td>1</td>
      <td>9</td>
      <td>7</td>
      <td>9</td>
      <td>11</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Historically Black Prot</td>
      <td>228</td>
      <td>244</td>
      <td>236</td>
      <td>238</td>
      <td>197</td>
    </tr>
    <tr>
      <th>8</th>
      <td>Jehovah's Witness</td>
      <td>20</td>
      <td>27</td>
      <td>24</td>
      <td>24</td>
      <td>21</td>
    </tr>
    <tr>
      <th>9</th>
      <td>Jewish</td>
      <td>19</td>
      <td>19</td>
      <td>25</td>
      <td>25</td>
      <td>30</td>
    </tr>
    <tr>
      <th>10</th>
      <td>Mainline Prot</td>
      <td>289</td>
      <td>495</td>
      <td>619</td>
      <td>655</td>
      <td>651</td>
    </tr>
    <tr>
      <th>11</th>
      <td>Mormon</td>
      <td>29</td>
      <td>40</td>
      <td>48</td>
      <td>51</td>
      <td>56</td>
    </tr>
    <tr>
      <th>12</th>
      <td>Muslim</td>
      <td>6</td>
      <td>7</td>
      <td>9</td>
      <td>10</td>
      <td>9</td>
    </tr>
    <tr>
      <th>13</th>
      <td>Orthodox</td>
      <td>13</td>
      <td>17</td>
      <td>23</td>
      <td>32</td>
      <td>32</td>
    </tr>
    <tr>
      <th>14</th>
      <td>Other Christian</td>
      <td>9</td>
      <td>7</td>
      <td>11</td>
      <td>13</td>
      <td>13</td>
    </tr>
    <tr>
      <th>15</th>
      <td>Other Faiths</td>
      <td>20</td>
      <td>33</td>
      <td>40</td>
      <td>46</td>
      <td>49</td>
    </tr>
    <tr>
      <th>16</th>
      <td>Other World Religions</td>
      <td>5</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>2</td>
    </tr>
    <tr>
      <th>17</th>
      <td>Unaffiliated</td>
      <td>217</td>
      <td>299</td>
      <td>374</td>
      <td>365</td>
      <td>341</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 한개의 열만 놔두고 행으로 바꾸기
# 종교 열만 놔두고 변경
pew_long = pd.melt(df, id_vars='religion')
pew_long
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>religion</th>
      <th>variable</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Agnostic</td>
      <td>&lt;$10k</td>
      <td>27</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Atheist</td>
      <td>&lt;$10k</td>
      <td>12</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Buddhist</td>
      <td>&lt;$10k</td>
      <td>27</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Catholic</td>
      <td>&lt;$10k</td>
      <td>418</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Don’t know/refused</td>
      <td>&lt;$10k</td>
      <td>15</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>175</th>
      <td>Orthodox</td>
      <td>Don't know/refused</td>
      <td>73</td>
    </tr>
    <tr>
      <th>176</th>
      <td>Other Christian</td>
      <td>Don't know/refused</td>
      <td>18</td>
    </tr>
    <tr>
      <th>177</th>
      <td>Other Faiths</td>
      <td>Don't know/refused</td>
      <td>71</td>
    </tr>
    <tr>
      <th>178</th>
      <td>Other World Religions</td>
      <td>Don't know/refused</td>
      <td>8</td>
    </tr>
    <tr>
      <th>179</th>
      <td>Unaffiliated</td>
      <td>Don't know/refused</td>
      <td>597</td>
    </tr>
  </tbody>
</table>
<p>180 rows × 3 columns</p>
</div>




```python
pew_long.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>religion</th>
      <th>variable</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Agnostic</td>
      <td>&lt;$10k</td>
      <td>27</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Atheist</td>
      <td>&lt;$10k</td>
      <td>12</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Buddhist</td>
      <td>&lt;$10k</td>
      <td>27</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Catholic</td>
      <td>&lt;$10k</td>
      <td>418</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Don’t know/refused</td>
      <td>&lt;$10k</td>
      <td>15</td>
    </tr>
  </tbody>
</table>
</div>




```python
pew_long = pd.melt(df, id_vars='religion', var_name='income', value_name='count')
print(pew_long.head())
```

                 religion income  count
    0            Agnostic  <$10k     27
    1             Atheist  <$10k     12
    2            Buddhist  <$10k     27
    3            Catholic  <$10k    418
    4  Don’t know/refused  <$10k     15
    


```python
# 2개 이상의 열을 고정하고, 나머지 열을 행으로 바꾸기
billboard = pd.read_csv('../data/billboard.csv')
billboard.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>year</th>
      <th>artist</th>
      <th>track</th>
      <th>time</th>
      <th>date.entered</th>
      <th>wk1</th>
      <th>wk2</th>
      <th>wk3</th>
      <th>wk4</th>
      <th>wk5</th>
      <th>...</th>
      <th>wk67</th>
      <th>wk68</th>
      <th>wk69</th>
      <th>wk70</th>
      <th>wk71</th>
      <th>wk72</th>
      <th>wk73</th>
      <th>wk74</th>
      <th>wk75</th>
      <th>wk76</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2000</td>
      <td>2 Pac</td>
      <td>Baby Don't Cry (Keep...</td>
      <td>4:22</td>
      <td>2000-02-26</td>
      <td>87</td>
      <td>82.0</td>
      <td>72.0</td>
      <td>77.0</td>
      <td>87.0</td>
      <td>...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2000</td>
      <td>2Ge+her</td>
      <td>The Hardest Part Of ...</td>
      <td>3:15</td>
      <td>2000-09-02</td>
      <td>91</td>
      <td>87.0</td>
      <td>92.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2000</td>
      <td>3 Doors Down</td>
      <td>Kryptonite</td>
      <td>3:53</td>
      <td>2000-04-08</td>
      <td>81</td>
      <td>70.0</td>
      <td>68.0</td>
      <td>67.0</td>
      <td>66.0</td>
      <td>...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2000</td>
      <td>3 Doors Down</td>
      <td>Loser</td>
      <td>4:24</td>
      <td>2000-10-21</td>
      <td>76</td>
      <td>76.0</td>
      <td>72.0</td>
      <td>69.0</td>
      <td>67.0</td>
      <td>...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2000</td>
      <td>504 Boyz</td>
      <td>Wobble Wobble</td>
      <td>3:35</td>
      <td>2000-04-15</td>
      <td>57</td>
      <td>34.0</td>
      <td>25.0</td>
      <td>17.0</td>
      <td>17.0</td>
      <td>...</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
<p>5 rows × 81 columns</p>
</div>




```python
billboard_long = pd.melt(billboard, 
                         id_vars=['year','artist','track','time','date.entered'],
                        var_name="week", value_name="rating")
print(billboard_long)
```

           year            artist                    track  time date.entered  \
    0      2000             2 Pac  Baby Don't Cry (Keep...  4:22   2000-02-26   
    1      2000           2Ge+her  The Hardest Part Of ...  3:15   2000-09-02   
    2      2000      3 Doors Down               Kryptonite  3:53   2000-04-08   
    3      2000      3 Doors Down                    Loser  4:24   2000-10-21   
    4      2000          504 Boyz            Wobble Wobble  3:35   2000-04-15   
    ...     ...               ...                      ...   ...          ...   
    24087  2000       Yankee Grey     Another Nine Minutes  3:10   2000-04-29   
    24088  2000  Yearwood, Trisha          Real Live Woman  3:55   2000-04-01   
    24089  2000   Ying Yang Twins  Whistle While You Tw...  4:19   2000-03-18   
    24090  2000     Zombie Nation            Kernkraft 400  3:30   2000-09-02   
    24091  2000   matchbox twenty                     Bent  4:12   2000-04-29   
    
           week  rating  
    0       wk1    87.0  
    1       wk1    91.0  
    2       wk1    81.0  
    3       wk1    76.0  
    4       wk1    57.0  
    ...     ...     ...  
    24087  wk76     NaN  
    24088  wk76     NaN  
    24089  wk76     NaN  
    24090  wk76     NaN  
    24091  wk76     NaN  
    
    [24092 rows x 7 columns]
    


```python
rvx = pd.melt(billboard, id_vars=['year','artist', 'track','time','date.entered']
             , var_name="week", value_name="rank")
rvx
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>year</th>
      <th>artist</th>
      <th>track</th>
      <th>time</th>
      <th>date.entered</th>
      <th>week</th>
      <th>rank</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2000</td>
      <td>2 Pac</td>
      <td>Baby Don't Cry (Keep...</td>
      <td>4:22</td>
      <td>2000-02-26</td>
      <td>wk1</td>
      <td>87.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2000</td>
      <td>2Ge+her</td>
      <td>The Hardest Part Of ...</td>
      <td>3:15</td>
      <td>2000-09-02</td>
      <td>wk1</td>
      <td>91.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2000</td>
      <td>3 Doors Down</td>
      <td>Kryptonite</td>
      <td>3:53</td>
      <td>2000-04-08</td>
      <td>wk1</td>
      <td>81.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2000</td>
      <td>3 Doors Down</td>
      <td>Loser</td>
      <td>4:24</td>
      <td>2000-10-21</td>
      <td>wk1</td>
      <td>76.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2000</td>
      <td>504 Boyz</td>
      <td>Wobble Wobble</td>
      <td>3:35</td>
      <td>2000-04-15</td>
      <td>wk1</td>
      <td>57.0</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>24087</th>
      <td>2000</td>
      <td>Yankee Grey</td>
      <td>Another Nine Minutes</td>
      <td>3:10</td>
      <td>2000-04-29</td>
      <td>wk76</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>24088</th>
      <td>2000</td>
      <td>Yearwood, Trisha</td>
      <td>Real Live Woman</td>
      <td>3:55</td>
      <td>2000-04-01</td>
      <td>wk76</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>24089</th>
      <td>2000</td>
      <td>Ying Yang Twins</td>
      <td>Whistle While You Tw...</td>
      <td>4:19</td>
      <td>2000-03-18</td>
      <td>wk76</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>24090</th>
      <td>2000</td>
      <td>Zombie Nation</td>
      <td>Kernkraft 400</td>
      <td>3:30</td>
      <td>2000-09-02</td>
      <td>wk76</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>24091</th>
      <td>2000</td>
      <td>matchbox twenty</td>
      <td>Bent</td>
      <td>4:12</td>
      <td>2000-04-29</td>
      <td>wk76</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
<p>24092 rows × 7 columns</p>
</div>




```python
# 7-2 열 이름 관리하기
ebola = pd.read_csv('../data/country_timeseries.csv')
ebola
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Date</th>
      <th>Day</th>
      <th>Cases_Guinea</th>
      <th>Cases_Liberia</th>
      <th>Cases_SierraLeone</th>
      <th>Cases_Nigeria</th>
      <th>Cases_Senegal</th>
      <th>Cases_UnitedStates</th>
      <th>Cases_Spain</th>
      <th>Cases_Mali</th>
      <th>Deaths_Guinea</th>
      <th>Deaths_Liberia</th>
      <th>Deaths_SierraLeone</th>
      <th>Deaths_Nigeria</th>
      <th>Deaths_Senegal</th>
      <th>Deaths_UnitedStates</th>
      <th>Deaths_Spain</th>
      <th>Deaths_Mali</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1/5/2015</td>
      <td>289</td>
      <td>2776.0</td>
      <td>NaN</td>
      <td>10030.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1786.0</td>
      <td>NaN</td>
      <td>2977.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1/4/2015</td>
      <td>288</td>
      <td>2775.0</td>
      <td>NaN</td>
      <td>9780.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1781.0</td>
      <td>NaN</td>
      <td>2943.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1/3/2015</td>
      <td>287</td>
      <td>2769.0</td>
      <td>8166.0</td>
      <td>9722.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1767.0</td>
      <td>3496.0</td>
      <td>2915.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1/2/2015</td>
      <td>286</td>
      <td>NaN</td>
      <td>8157.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>3496.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>12/31/2014</td>
      <td>284</td>
      <td>2730.0</td>
      <td>8115.0</td>
      <td>9633.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1739.0</td>
      <td>3471.0</td>
      <td>2827.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>117</th>
      <td>3/27/2014</td>
      <td>5</td>
      <td>103.0</td>
      <td>8.0</td>
      <td>6.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>66.0</td>
      <td>6.0</td>
      <td>5.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>118</th>
      <td>3/26/2014</td>
      <td>4</td>
      <td>86.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>62.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>119</th>
      <td>3/25/2014</td>
      <td>3</td>
      <td>86.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>60.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>120</th>
      <td>3/24/2014</td>
      <td>2</td>
      <td>86.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>59.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>121</th>
      <td>3/22/2014</td>
      <td>0</td>
      <td>49.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>29.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
<p>122 rows × 18 columns</p>
</div>




```python
ebola.columns
```




    Index(['Date', 'Day', 'Cases_Guinea', 'Cases_Liberia', 'Cases_SierraLeone',
           'Cases_Nigeria', 'Cases_Senegal', 'Cases_UnitedStates', 'Cases_Spain',
           'Cases_Mali', 'Deaths_Guinea', 'Deaths_Liberia', 'Deaths_SierraLeone',
           'Deaths_Nigeria', 'Deaths_Senegal', 'Deaths_UnitedStates',
           'Deaths_Spain', 'Deaths_Mali'],
          dtype='object')




```python
ebola.iloc[:5, [0,1,2,3,10,11]]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Date</th>
      <th>Day</th>
      <th>Cases_Guinea</th>
      <th>Cases_Liberia</th>
      <th>Deaths_Guinea</th>
      <th>Deaths_Liberia</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1/5/2015</td>
      <td>289</td>
      <td>2776.0</td>
      <td>NaN</td>
      <td>1786.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1/4/2015</td>
      <td>288</td>
      <td>2775.0</td>
      <td>NaN</td>
      <td>1781.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1/3/2015</td>
      <td>287</td>
      <td>2769.0</td>
      <td>8166.0</td>
      <td>1767.0</td>
      <td>3496.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1/2/2015</td>
      <td>286</td>
      <td>NaN</td>
      <td>8157.0</td>
      <td>NaN</td>
      <td>3496.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>12/31/2014</td>
      <td>284</td>
      <td>2730.0</td>
      <td>8115.0</td>
      <td>1739.0</td>
      <td>3471.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
ebola.loc[:4, ['Date', 'Day', 'Cases_Guinea', 'Cases_Liberia', 'Deaths_Guinea', 'Deaths_Liberia']]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Date</th>
      <th>Day</th>
      <th>Cases_Guinea</th>
      <th>Cases_Liberia</th>
      <th>Deaths_Guinea</th>
      <th>Deaths_Liberia</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1/5/2015</td>
      <td>289</td>
      <td>2776.0</td>
      <td>NaN</td>
      <td>1786.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1/4/2015</td>
      <td>288</td>
      <td>2775.0</td>
      <td>NaN</td>
      <td>1781.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1/3/2015</td>
      <td>287</td>
      <td>2769.0</td>
      <td>8166.0</td>
      <td>1767.0</td>
      <td>3496.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1/2/2015</td>
      <td>286</td>
      <td>NaN</td>
      <td>8157.0</td>
      <td>NaN</td>
      <td>3496.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>12/31/2014</td>
      <td>284</td>
      <td>2730.0</td>
      <td>8115.0</td>
      <td>1739.0</td>
      <td>3471.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
ebola_long = pd.melt(ebola, id_vars=['Date','Day'])
ebola_long
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Date</th>
      <th>Day</th>
      <th>variable</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1/5/2015</td>
      <td>289</td>
      <td>Cases_Guinea</td>
      <td>2776.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1/4/2015</td>
      <td>288</td>
      <td>Cases_Guinea</td>
      <td>2775.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1/3/2015</td>
      <td>287</td>
      <td>Cases_Guinea</td>
      <td>2769.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1/2/2015</td>
      <td>286</td>
      <td>Cases_Guinea</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>12/31/2014</td>
      <td>284</td>
      <td>Cases_Guinea</td>
      <td>2730.0</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>1947</th>
      <td>3/27/2014</td>
      <td>5</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1948</th>
      <td>3/26/2014</td>
      <td>4</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1949</th>
      <td>3/25/2014</td>
      <td>3</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1950</th>
      <td>3/24/2014</td>
      <td>2</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1951</th>
      <td>3/22/2014</td>
      <td>0</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
<p>1952 rows × 4 columns</p>
</div>




```python
variable_split = ebola_long['variable'].str.split('_')
variable_split[0:5]
```




    0    [Cases, Guinea]
    1    [Cases, Guinea]
    2    [Cases, Guinea]
    3    [Cases, Guinea]
    4    [Cases, Guinea]
    Name: variable, dtype: object




```python
type(variable_split)
```




    pandas.core.series.Series




```python
type(variable_split[0])
# 레코드 별 각 하나하나의 개념
```




    list




```python
status_df = variable_split.str.get(0)
country_df = variable_split.str.get(1)
print(status_df, country_df)
```

    0        Cases
    1        Cases
    2        Cases
    3        Cases
    4        Cases
             ...  
    1947    Deaths
    1948    Deaths
    1949    Deaths
    1950    Deaths
    1951    Deaths
    Name: variable, Length: 1952, dtype: object 0       Guinea
    1       Guinea
    2       Guinea
    3       Guinea
    4       Guinea
             ...  
    1947      Mali
    1948      Mali
    1949      Mali
    1950      Mali
    1951      Mali
    Name: variable, Length: 1952, dtype: object
    


```python
ebola_long['status'] = status_df
ebola_long['country'] = country_df
```


```python
#testcase
tdf = ebola_long.copy()
tdf
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Date</th>
      <th>Day</th>
      <th>variable</th>
      <th>value</th>
      <th>status</th>
      <th>country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1/5/2015</td>
      <td>289</td>
      <td>Cases_Guinea</td>
      <td>2776.0</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1/4/2015</td>
      <td>288</td>
      <td>Cases_Guinea</td>
      <td>2775.0</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1/3/2015</td>
      <td>287</td>
      <td>Cases_Guinea</td>
      <td>2769.0</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1/2/2015</td>
      <td>286</td>
      <td>Cases_Guinea</td>
      <td>NaN</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>4</th>
      <td>12/31/2014</td>
      <td>284</td>
      <td>Cases_Guinea</td>
      <td>2730.0</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>1947</th>
      <td>3/27/2014</td>
      <td>5</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1948</th>
      <td>3/26/2014</td>
      <td>4</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1949</th>
      <td>3/25/2014</td>
      <td>3</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1950</th>
      <td>3/24/2014</td>
      <td>2</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1951</th>
      <td>3/22/2014</td>
      <td>0</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
  </tbody>
</table>
<p>1952 rows × 6 columns</p>
</div>




```python
tdf.drop(['status', 'country'], axis=1)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Date</th>
      <th>Day</th>
      <th>variable</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1/5/2015</td>
      <td>289</td>
      <td>Cases_Guinea</td>
      <td>2776.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1/4/2015</td>
      <td>288</td>
      <td>Cases_Guinea</td>
      <td>2775.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1/3/2015</td>
      <td>287</td>
      <td>Cases_Guinea</td>
      <td>2769.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1/2/2015</td>
      <td>286</td>
      <td>Cases_Guinea</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>12/31/2014</td>
      <td>284</td>
      <td>Cases_Guinea</td>
      <td>2730.0</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>1947</th>
      <td>3/27/2014</td>
      <td>5</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1948</th>
      <td>3/26/2014</td>
      <td>4</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1949</th>
      <td>3/25/2014</td>
      <td>3</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1950</th>
      <td>3/24/2014</td>
      <td>2</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1951</th>
      <td>3/22/2014</td>
      <td>0</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
<p>1952 rows × 4 columns</p>
</div>




```python
status = tdf['variable'].str.split('_').get(0)
status
tdf['nd'] = status
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    Cell In[57], line 3
          1 status = tdf['variable'].str.split('_').get(0)
          2 status
    ----> 3 tdf['nd'] = status
    

    File ~\anaconda3\Lib\site-packages\pandas\core\frame.py:3980, in DataFrame.__setitem__(self, key, value)
       3977     self._setitem_array([key], value)
       3978 else:
       3979     # set column
    -> 3980     self._set_item(key, value)
    

    File ~\anaconda3\Lib\site-packages\pandas\core\frame.py:4174, in DataFrame._set_item(self, key, value)
       4164 def _set_item(self, key, value) -> None:
       4165     """
       4166     Add series to DataFrame in specified column.
       4167 
       (...)
       4172     ensure homogeneity.
       4173     """
    -> 4174     value = self._sanitize_column(value)
       4176     if (
       4177         key in self.columns
       4178         and value.ndim == 1
       4179         and not is_extension_array_dtype(value)
       4180     ):
       4181         # broadcast across multiple columns if necessary
       4182         if not self.columns.is_unique or isinstance(self.columns, MultiIndex):
    

    File ~\anaconda3\Lib\site-packages\pandas\core\frame.py:4915, in DataFrame._sanitize_column(self, value)
       4912     return _reindex_for_setitem(Series(value), self.index)
       4914 if is_list_like(value):
    -> 4915     com.require_length_match(value, self.index)
       4916 return sanitize_array(value, self.index, copy=True, allow_2d=True)
    

    File ~\anaconda3\Lib\site-packages\pandas\core\common.py:571, in require_length_match(data, index)
        567 """
        568 Check the length of data matches the length of the index.
        569 """
        570 if len(data) != len(index):
    --> 571     raise ValueError(
        572         "Length of values "
        573         f"({len(data)}) "
        574         "does not match length of index "
        575         f"({len(index)})"
        576     )
    

    ValueError: Length of values (2) does not match length of index (1952)



```python
ebola_long
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Date</th>
      <th>Day</th>
      <th>variable</th>
      <th>value</th>
      <th>status</th>
      <th>country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1/5/2015</td>
      <td>289</td>
      <td>Cases_Guinea</td>
      <td>2776.0</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1/4/2015</td>
      <td>288</td>
      <td>Cases_Guinea</td>
      <td>2775.0</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1/3/2015</td>
      <td>287</td>
      <td>Cases_Guinea</td>
      <td>2769.0</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1/2/2015</td>
      <td>286</td>
      <td>Cases_Guinea</td>
      <td>NaN</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>4</th>
      <td>12/31/2014</td>
      <td>284</td>
      <td>Cases_Guinea</td>
      <td>2730.0</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>1947</th>
      <td>3/27/2014</td>
      <td>5</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1948</th>
      <td>3/26/2014</td>
      <td>4</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1949</th>
      <td>3/25/2014</td>
      <td>3</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1950</th>
      <td>3/24/2014</td>
      <td>2</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1951</th>
      <td>3/22/2014</td>
      <td>0</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
  </tbody>
</table>
<p>1952 rows × 6 columns</p>
</div>




```python
# concat 메서드를 활용하여, 데이터프레임에 열 추가
variable_split = ebola_long.variable.str.split('_', expand=True)
# expand 데이터가 데이터프레임으로 반환할지 여부를 셀렉트 하는 것ㄴ
variable_split.columns=['status','country']
variable_split
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>status</th>
      <th>country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>1947</th>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1948</th>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1949</th>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1950</th>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1951</th>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
  </tbody>
</table>
<p>1952 rows × 2 columns</p>
</div>




```python
ebola_parsed = pd.concat([ebola_long, variable_split], axis=1)
ebola_parsed
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Date</th>
      <th>Day</th>
      <th>variable</th>
      <th>value</th>
      <th>status</th>
      <th>country</th>
      <th>status</th>
      <th>country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1/5/2015</td>
      <td>289</td>
      <td>Cases_Guinea</td>
      <td>2776.0</td>
      <td>Cases</td>
      <td>Guinea</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1/4/2015</td>
      <td>288</td>
      <td>Cases_Guinea</td>
      <td>2775.0</td>
      <td>Cases</td>
      <td>Guinea</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1/3/2015</td>
      <td>287</td>
      <td>Cases_Guinea</td>
      <td>2769.0</td>
      <td>Cases</td>
      <td>Guinea</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1/2/2015</td>
      <td>286</td>
      <td>Cases_Guinea</td>
      <td>NaN</td>
      <td>Cases</td>
      <td>Guinea</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>4</th>
      <td>12/31/2014</td>
      <td>284</td>
      <td>Cases_Guinea</td>
      <td>2730.0</td>
      <td>Cases</td>
      <td>Guinea</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>1947</th>
      <td>3/27/2014</td>
      <td>5</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1948</th>
      <td>3/26/2014</td>
      <td>4</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1949</th>
      <td>3/25/2014</td>
      <td>3</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1950</th>
      <td>3/24/2014</td>
      <td>2</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
    <tr>
      <th>1951</th>
      <td>3/22/2014</td>
      <td>0</td>
      <td>Deaths_Mali</td>
      <td>NaN</td>
      <td>Deaths</td>
      <td>Mali</td>
      <td>Deaths</td>
      <td>Mali</td>
    </tr>
  </tbody>
</table>
<p>1952 rows × 8 columns</p>
</div>




```python
ebola_parsed.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Date</th>
      <th>Day</th>
      <th>variable</th>
      <th>value</th>
      <th>status</th>
      <th>country</th>
      <th>status</th>
      <th>country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1/5/2015</td>
      <td>289</td>
      <td>Cases_Guinea</td>
      <td>2776.0</td>
      <td>Cases</td>
      <td>Guinea</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1/4/2015</td>
      <td>288</td>
      <td>Cases_Guinea</td>
      <td>2775.0</td>
      <td>Cases</td>
      <td>Guinea</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1/3/2015</td>
      <td>287</td>
      <td>Cases_Guinea</td>
      <td>2769.0</td>
      <td>Cases</td>
      <td>Guinea</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1/2/2015</td>
      <td>286</td>
      <td>Cases_Guinea</td>
      <td>NaN</td>
      <td>Cases</td>
      <td>Guinea</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
    <tr>
      <th>4</th>
      <td>12/31/2014</td>
      <td>284</td>
      <td>Cases_Guinea</td>
      <td>2730.0</td>
      <td>Cases</td>
      <td>Guinea</td>
      <td>Cases</td>
      <td>Guinea</td>
    </tr>
  </tbody>
</table>
</div>


