ulimit -n unlimited
echo "Dropping database..."
contender db drop
echo "Setting up scenario..."
contender setup scenario:stress.toml
echo "Spamming..."
contender spam scenario:stress.toml --min-balance 5eth --tpb 1000 -d 60