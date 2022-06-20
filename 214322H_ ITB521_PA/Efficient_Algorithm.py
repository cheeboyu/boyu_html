# Chee Bo Yu, 214322H, BA2102

# Function to find a pair in an array with a given sum using sorting
def boyufindPair(boyunums, boyutarget):

	# sort the list in ascending order
	boyunums.sort()

	# maintain two indices pointing to endpoints of the list
	(boyulow, boyuhigh) = (0, len(boyunums) - 1)

	# reduce the search space `boyunums[low…high]` at each iteration of the loop

	# loop till the search space is exhausted
	while boyulow < boyuhigh:

		if boyunums[boyulow] + boyunums[boyuhigh] == boyutarget: # target found
			return boyunums[boyulow],boyunums[boyuhigh]

		# increment `low` index if the total is less than the desired sum
		if boyunums[boyulow] + boyunums[boyuhigh] < boyutarget:
			boyulow = boyulow + 1
		# decrement `high` index if the total is more than the desired sum
		else:
			boyuhigh = boyuhigh - 1
	return False


if __name__ == '__main__':

	# Test code
	boyunums = [2,3,5,7,8,10,15,16,23,28]
	boyutarget = 21 # value of Z
	boyunumbers = boyufindPair(boyunums, boyutarget)

	# Output
	if not boyunumbers:
		print("X = not found\nY = not found\nFALSE")
	else:
		print("X =",boyunumbers[0],"\nY =",boyunumbers[1],"\nTRUE")
