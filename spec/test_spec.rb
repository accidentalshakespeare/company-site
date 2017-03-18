describe "test", type: :feature, js: true do
  it 'has a title' do
    visit '/index.html'

    expect(find('.container').text).to eq('')
  end
end
