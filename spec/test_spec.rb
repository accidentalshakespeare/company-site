describe "test", type: :feature, js: true do
  it 'has a title' do
    visit '/'

    expect(find('.post-link').text).to eq('Welcome to Jekyll!')
  end
end
