##Question: is 1 + 0.239999999999... a decimal expansion?


##Answer: No
<p>
	As Knuth explains if the representation of the number k = n + 0.d<sub>1</sub>d<sub>2</sub>... ends in infinitely 9's then it is not a decimal expansion.
</p>
###Explanation
<ul>
	<li>
		<p>
			The reasoning behind this is actually quite interesting.  It really stems from the fact that 1 = .9999...
		</p>
	</li>
	<li>
		<p>
			If that is the case then assuming that we have a number q such that:
		</p>
		<p>
			q = n + 0.d<sub>1</sub>d<sub>2</sub>...d<sub>k</sub>... 
		</p>
		<p>
			= n + d<sub>1</sub>*(10<sup>-1</sup>) + d<sub>2</sub>*(10<sup>-2</sup>) +...+ d <sub>k</sub>*(10<sup>-k</sup>)...
		</p>
		<p>
			where if  k =< t then t = 9.
		</p>
	</li>
	<li>
		<p>
			Then we have:
		</p>
		<p>
			q = n + d<sub>1</sub>*(10<sup>-1</sup>) +...+ d<sub>k-1</sub>*(10<sup>-(k-1)</sup>) + (10<sup>-(k-1)</sup>)*(9*(10 <sup>-1</sup>) + 9*(10<sup>-2</sup>)...) 
		</p>
		<p>
			= n + d<sub>1</sub>*(10<sup>-1</sup>)+...+d<sub>k-1</sub>*(10<sup>-(k-1)</sup>) + (10<sup>-(k-1)</sup>)*(.999....)
		</p>
		<p>
			= n + d<sub>1</sub>*(10<sup>-1</sup>)+...+d<sub>k-1</sub>*(10<sup>-(k-1)</sup>) + (10<sup>-(k-1)</sup>)*(1)
		</p>
		<p>
			= n + d<sub>1</sub>*(10<sup>-1</sup>)+...+(d<sub>k-1</sub> + 1)*(10<sup>-(k-1)</sup>)
		</p>
		<p>
			= (n + d<sub>1</sub>*(10<sup>-1</sup>)+...+(d<sub>k-1</sub> + 1)*(10<sup>-(k-1)</sup>))*(10<sup>k - 1</sup>) / 10<sup>k - 1</sup>
		</p>
		<p>
			Which we can clearly seee is rational and does not have a decimal expansion.
		</p>
	</li>
	<!-- <li>
		<p>
			So then we have q = n + 0.d<sub>1</sub>d<sub>2</sub>...(d<sub>k - 1</sub> + )
		</p>
	</li> -->
</ul>
