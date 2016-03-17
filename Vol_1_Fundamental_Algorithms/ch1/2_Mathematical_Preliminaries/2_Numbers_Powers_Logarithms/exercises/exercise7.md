##Question: Given that x and y are integers, prove the laws of exponents.
<p>i.e. prove that for a given positive real number that:</p>
<ul>
	<li>b<sup>x+y</sup> = b<sup>x</sup>b<sup>y</sup></li>
	<li>(b<sup>x</sup>))<sup>y</sup> = b<sup>xy</sup></li> 
</ul>


##Answer: 
<p>
	I will only be proving this for the positive side as proving it for the negative is the same process essentially.
</p>
<p>
	Proof (By Induction): 
</p>
<ul>
	<li>
		<p>
			let b be a positive real number.  Then we know that:
			<ul>
				<li>
					b<sup>0</sup> = 1
				</li>
				<li>
					b<sup>n</sup> = b<sup>n-1</sup>b if n > 0
				</li>
				<li>
					b<sup>n</sup> = b<sup>n+1</sup>/b if n < 0
				</li>
			</ul>
		</p>
	</li>
	<li>
		<p>
			So then let b be a positive real number and let x and y be integers.
		</p>
	</li>
	<li>
		<p>
			So then we note that if x = 1, b<sup>y</sup>b<sup>1</sup> = (b * ...<sub>y terms</sub> * b)(b) =  (b * ...<sub>y + 1 terms</sub> * b) = b<sup>y+1</sup>
		</p>
		<p>So it is true for x = 1</p>
	</li>
	<li>
		<p>
			Now assume it is true for x = k.  Then: b<sup>y</sup>b<sup>k</sup> = b<sup>y + k</sup> 
		</p>
	</li>
	<li>
		<p>
			Let x = k + 1
		</p>
		<p>
			By induction then: 
			b<sup>y</sup>b<sup>k + 1</sup> = b<sup>y</sup>(b<sup>1</sup>b<sup>k</sup>) = b<sup>y + k</sup>b<sup>1</sup> = b<sup>y + k + 1</sup>
		</p>
		<p>
			Therefore by induction b<sup>y</sup>b<sup>x</sup> = b <sup>y + x</sup> has been proven.  Q.E.D.
		</p>
	</li>
</ul> 
<p>
	Using this fact we can easily prove that (b<sup>x</sup>)<sup>y</sup> = b <sup>xy</sup>
</p>
<p>Proof:</p>
<ul>
	<li>
		<p>
			(b<sup>x</sup>)<sup>y</sup> = (b<sup>x</sup> * ...<sub>y terms</sub> * b <sup>x</sup>) = b<sup>xy</sup>
		</p>
		<p>by the previous proof.  Q.E.D.</p>
	</li>
</ul>